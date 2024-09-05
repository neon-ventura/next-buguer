"use client"

import { useParams } from "next/navigation"
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Pedir() {
    const param = useParams()
    const router = useRouter()

    const [cardapio, setCardapio] = useState({})
    const [usuario, setUsuario] = useState('')
    const [mesa, setMesa] = useState('')
    const [burguer, setBurguer] = useState('')

    useEffect(() => {
        const handleCardapio = async () => {
            const res = await fetch('/api/cardapio')
            const data = await res.json()
            setCardapio(data[param.id])
            setBurguer(data[param.id].burguer)
            console.log(data[param.id].burguer)
        }
        handleCardapio()
    }, [param.id])
    
    const handlePedido = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/pedidos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({usuario, mesa, burguer})
        })
        console.log(res)
        const data = await res.json()
        console.log('Pedido Criado:', data)
        setUsuario('')
        setMesa('')
        router.push('/pedir/final')
    }
    return (
        <>
            <div className={styles.pedido}>
                <h1>Finalizar Pedido</h1>
                <form className={styles.form} onSubmit={handlePedido}>
                    <label className={styles.input}>
                        <span>Nome:</span>
                        <input className={styles.input} type="text" placeholder="Digite seu Nome" required  onChange={(e) => setUsuario(e.target.value)}/>
                    </label>
                    <label className={styles.input}>
                        <span>Mesa:</span>
                        <input className={styles.input} type="number" placeholder="Digite sua mesa" required  onChange={(e) => setMesa(e.target.value)}/>
                    </label>

                    <div className={styles.card}>
                        <Image height={200} width={200} className={styles.img} src={`/img-${param.id}.jpg`} alt="" />
                        <p>{cardapio.burguer}</p>
                    </div>

                    <input className={styles.input} type="submit" value="Pedir" />
                </form>
            </div>
        </>
    )
}
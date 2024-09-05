"use client";
import styles from '../page.module.css';
import { useEffect, useState } from "react";

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    const getPedidos = async () => {
        const res = await fetch('/api/verpedidos');
        const data = await res.json();
        setPedidos(data);
        console.log(data);
    };

    useEffect(() => {
        getPedidos();
        const intervalId = setInterval(getPedidos, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const deleteCard = (id) => {

    }

    return (
        <>
            <h1 className={styles.h1}>Pedidos</h1>

            <div className={styles.burguer_container}>
                {pedidos.map((i) => (
                    <div className={styles.burguer_card} key={i.id}>
                        <p>{i.burguer}</p>
                        {i.burguer === 'X-Bacon' ? (
                            <img className={styles.img} src="/img-0.jpg" alt="X-Bacon" />
                        ) : i.burguer === 'X-Tudo' ? (
                            <img className={styles.img} src="/img-1.jpg" alt="X-Tudo" />
                        ) : i.burguer === 'X-Salada' ? (
                            <img className={styles.img} src="/img-2.jpg" alt="X-Salada" />
                        ) : (
                            <p>Imagem não encontrada</p>
                        )}
                        <p>Mesa: {i.mesa}</p>
                        <p>Nome: {i.usuario}</p>
                        <button onClick={deleteCard(i.id)} className={styles.btn_burguer}>Entregue</button>
                    </div>
                ))}
            </div>
        </>
    );
}

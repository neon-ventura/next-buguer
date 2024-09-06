"use client";
import styles from '../page.module.css';
import { useEffect, useState } from "react";
import Image from 'next/image';

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

    return (
        <>
            <h1 className={styles.h1}>Pedidos</h1>

            <div className={styles.burguer_container}>
                {pedidos.map((i, index) => (
                    <div className={styles.burguer_card} key={index}>
                        <p>{i.burguer}</p>
                        {i.burguer === 'X-Bacon' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-0.jpg" alt="X-Bacon" />
                        ) : i.burguer === 'X-Tudo' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-1.jpg" alt="X-Tudo" />
                        ) : i.burguer === 'X-Salada' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-2.jpg" alt="X-Salada" />
                        ) : (
                            <p>Imagem não encontrada</p>
                        )}
                        <p>Mesa: {i.mesa}</p>
                        <p>Nome: {i.usuario}</p>
                        <button className={styles.btn_burguer}>Entregue</button>
                    </div>
                ))}
            </div>
        </>
    );
}

"use client";
import styles from '../page.module.css';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const res = await fetch('/api/verpedidos', { cache: 'no-store' });
                const data = await res.json();
                setPedidos(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching pedidos:', error);
            }
        };

        // Fetch pedidos initially
        fetchPedidos();

        // Set up polling with an interval of 10 seconds
        const intervalId = setInterval(fetchPedidos, 10000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <h1 className={styles.h1}>Pedidos</h1>

            <div className={styles.burguer_container}>
                {pedidos.map((i) => (
                    <div key={i.id} className={styles.burguer_card}>
                        <p>{i.burguer}</p>
                        {i.burguer === 'X-Bacon' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-0.jpg" priority alt="X-Bacon" />
                        ) : i.burguer === 'X-Tudo' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-1.jpg" priority alt="X-Tudo" />
                        ) : i.burguer === 'X-Salada' ? (
                            <Image height={200} width={200} className={styles.img} src="/img-2.jpg" priority alt="X-Salada" />
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

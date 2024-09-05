"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [cardapio, setCardapio] = useState([])

  useEffect(() => {
    const handleCardapio = async () => {
      const res = await fetch('/api/cardapio')
      const data = await res.json()
      setCardapio(data)
    }
    handleCardapio()
  }, [])


  return (
    <>
      <h1 className={styles.h1}>Cardápio</h1>
      {
        cardapio.map((i) => (
          <div className={styles.content}>
            <div className={styles.card} key={i.id}>
              <Image className={styles.img} width={200} height={200} src={`/img-${i.id}.jpg`} alt="" />
              <p key={i.id}>{i.burguer}</p>
              <a href={`/pedir/${i.id}`}>Pedir</a>
            </div>
          </div>
        ))
      }
    </>
  );
}

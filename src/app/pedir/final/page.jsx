import styles from "../../page.module.css";
import Image from "next/image";

export default function Final() {
    return(
        <>
            <div className={styles.container}>
                <h1>Muito obrigado pela preferência</h1>
                <h1>Aguarde o seu pedido</h1>
                <Image height={200} width={200} src={`/cute-cat.gif`} alt="" />
                <a className={styles.return} href="/">Voltar</a>
            </div>
        </>
    )
}
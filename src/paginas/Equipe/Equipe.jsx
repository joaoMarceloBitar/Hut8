import styles from './Equipe.module.css'
function Equipe() {

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <div className={styles.tag}>
                        <div className={styles.bola}></div>
                        <p>A empresa júnior da computação</p>
                    </div>
                    <h1>
                        Conheça nossa Equipe
                    </h1>
                    <p>Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação</p>
                </div>
                <img src="foto1-equipe.svg" alt="" className={styles.imagem_1} />
            </div>
        </section>
    )

}

export default Equipe
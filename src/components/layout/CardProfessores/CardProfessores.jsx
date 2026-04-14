import styles from "./CardProfessor.modules.css"

function CardProfessor(nome,cargo,descricao,foto){

    return(
        <main className={styles.container}>
            <div className={styles.conteudo}>
                <img src={foto} alt="foto do professor" />
                <div className={styles.desc}>
                    <h3>{nome}</h3>
                    <p>{cargo}</p>
                    <p>{descricao}</p>
                    <div className={styles.icons}> 
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </main>
)
}

export default CardProfessor
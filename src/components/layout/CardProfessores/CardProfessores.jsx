import styles from "./CardProfessores.module.css"

function CardProfessores({nome,cargo,descricao,imagem}){

    return(
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <img className={styles.foto} src={imagem} alt="foto do professor" />
                <div className={styles.desc}>
                    <div className={styles.nomeCargo}>
                        <h3 className={styles.nome}>{nome}</h3>
                        <p className={styles.cargo}>{cargo}</p>
                    </div>
                    <p className={styles.descricao}>{descricao}</p>
                    <div className={styles.icons}> 
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
)
}

export default CardProfessores
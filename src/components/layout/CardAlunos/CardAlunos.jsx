import styles from "./CardAlunos.module.css"

function CardAlunos({nome,area,ocupacao,imagem}){

    let ancoraIcon1;
    switch(area){

        case "Design":
            ancoraIcon1 = "/equipe-design-icon.svg"
            break;
             
        case "Dev":
            ancoraIcon1 = "/equipe-dev-icon.svg" 
            break;

        case "Frontend":
            ancoraIcon1 = "/equipe-frontend-icon.svg"
            break;

        case "Mobile":
            ancoraIcon1 = "/equipe-mobile-icon.svg" 
            break;

        default:
            ancoraIcon1 = "/equipe-dev-icon.svg"
    }



    return(
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <div className={styles.imagemContainer}>
                    <img src={imagem} alt="" className={styles.foto} />
                </div>
                <div className={styles.nomeOcup}>
                    <h3 className={styles.nome}>{nome}</h3>
                    <p className={styles.ocupacao}>{ocupacao}</p>
                </div>
                <div className={styles.icones}>
                    <a className={styles.ancora} href="">
                        <img className={styles.icon} src={ancoraIcon1} alt="" />
                    </a>
                    <a className={styles.ancora} href="">
                        <img className={styles.icon} src="/equipe-@-icon.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )

}
export default CardAlunos
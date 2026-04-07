import styles from "./HeroSection.module.css"
function HeroSection() {
    return (

        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.overlayborder}>
                    <span className={styles.dot}></span>
                    <span>a empresa junior da computação</span>
                </div>
                <div className={styles.tittle}>
                    <h1>Nossos <span>Projetos</span></h1>
                </div>
                <div className={styles.text}>
                    <p>Combinamos excelência técnica e visão estratégica para transformar
                        desafios complexos em produtos digitais de alta performance.
                        Conheça nossa trajetória de inovação.</p>
                </div>
            </div>
            <div className={styles.image}>
                <img src="" alt="" />
            </div>
        </div>

    )
}
export default HeroSection
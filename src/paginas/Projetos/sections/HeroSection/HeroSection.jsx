import styles from "./HeroSection.module.css"

function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundBlurPurple}></div>
            <div className={styles.backgroundBlurGreen}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.overlayBorder}>
                        <div className={styles.dotContainer}>
                            <span className={styles.dotBackground}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <span className={styles.badgeText}>A empresa júnior da Computação</span>
                    </div>

                    <h1 className={styles.title}>
                        Nossos <span>Projetos</span>
                    </h1>

                    <p className={styles.description}>
                        Combinamos excelência técnica e visão estratégica para transformar 
                        desafios complexos em produtos digitais de alta performance. 
                        Conheça nossa trajetória de inovação.
                    </p>
                </div>

                <div className={styles.visual}>
                    <div className={styles.blobTop}></div>
                    <div className={styles.blobBottom}></div>

                    <div className={styles.imageWrapper}>
                        <img src="/image.png" alt="Mockup de tecnologia" className={styles.mainImage} />

                        <div className={styles.floatingCode}>
                            <div className={styles.codeControls}>
                                <span className={`${styles.control} ${styles.red}`}></span>
                                <span className={`${styles.control} ${styles.yellow}`}></span>
                                <span className={`${styles.control} ${styles.green}`}></span>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeLine}>
                                    <span className={styles.purpleText}>const</span> hut8 = {"{"}
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;founded: <span className={styles.greenText}>2014</span>,
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;mission: <span className={styles.greenText}>"Innovate"</span>
                                </div>
                                <div className={styles.codeLine}>
                                    {"}"};
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

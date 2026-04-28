import styles from './CTASection.module.css';

function CTASection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.blurRightTop}></div>
                <div className={styles.blurLeftBottom}></div>
                
                <div className={styles.headingWrapper}>
                    <h2 className={styles.heading}>
                        Pronto para tirar sua<br />ideia do papel?
                    </h2>
                </div>
                
                <div className={styles.subtitleWrapper}>
                    <p className={styles.subtitle}>
                        Seja você uma startup em crescimento ou uma empresa consolidada<br/>buscando inovação, nossa equipe está pronta para construir o futuro com<br/>você.
                    </p>
                </div>
                
                <div className={styles.buttonsContainer}>
                    <button className={styles.primaryButton}>Solicitar Orçamento</button>
                    <button className={styles.secondaryButton}>Falar com Consultor</button>
                </div>
            </div>
        </section>
    );
}

export default CTASection;

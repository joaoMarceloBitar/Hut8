import styles from './ProjectCardDark.module.css'

function ProjectCardDark({ title, description, image, badges, metric, metricLabel, buttonText, gradient, resultText, arrowButton }) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.cardGradient} style={{ background: gradient }}></div>
            <div className={styles.badges}>
                {badges.map((badge) => (
                    <span key={badge.label} className={badge.primary ? styles.badgePrimary : styles.badgeSecondary}>
                        {badge.label}
                    </span>
                ))}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                {metric && (
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>{metric}</span>
                        <span className={styles.metricLabel}>{metricLabel}</span>
                    </div>
                )}
                {resultText && <span className={styles.resultText}>{resultText}</span>}
                {buttonText && <a className={styles.button} href="#">{buttonText} →</a>}
                {arrowButton && <div className={styles.arrowButton}>↗</div>}
            </div>
        </div>
    )
}

export default ProjectCardDark

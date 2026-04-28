import styles from './ProjectCardDark.module.css'

function ProjectCardDark({ title, description, image, badges, metric, metricLabel, buttonText, gradient, resultText, arrowButton, className }) {
    return (
        <div className={`${styles.card} ${className || ''}`} style={{ backgroundImage: `url(${image})` }}>
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
                {arrowButton && (
                    <button className={styles.arrowButton}>
                        <svg className={styles.arrowIcon} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 11L11 4M11 4H5.5M11 4V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProjectCardDark

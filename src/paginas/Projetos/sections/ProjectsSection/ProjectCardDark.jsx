import styles from './ProjectCardDark.module.css'

function ProjectCardDark({ title, description, image, badges, metric, metricLabel, buttonText, gradient }) {
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
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.footer}>
                    {metric && (
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>{metric}</span>
                            <span className={styles.metricLabel}>{metricLabel}</span>
                        </div>
                    )}
                    {buttonText && (
                        <a className={styles.button} href="#">{buttonText} →</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardDark

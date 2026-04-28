import styles from './ProjectCardSide.module.css'

function ProjectCardSide({ title, category, description, image, features, linkText, className }) {
    return (
        <div className={`${styles.card} ${className || ''}`}>
            <div className={styles.imageWrapper}>
                <div className={styles.imageOverlay}></div>
                <img src={image} alt={title} className={styles.image} />
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                
                {features && features.length > 0 && (
                    <ul className={styles.features}>
                        {features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <div className={styles.featureIconWrapper}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2071 4.79289C12.5976 5.18342 12.5976 5.81658 12.2071 6.20711L6.54043 11.8738C6.14991 12.2643 5.51674 12.2643 5.12622 11.8738L2.29289 9.04043C1.90237 8.64991 1.90237 8.01674 2.29289 7.62622C2.68342 7.23569 3.31658 7.23569 3.70711 7.62622L5.83333 9.75244L10.7929 4.79289C11.1834 4.40237 11.8166 4.40237 12.2071 4.79289Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span className={styles.featureText}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
                
                <a href="#" className={styles.button}>
                    {linkText || 'Ver Detalhes'}
                </a>
            </div>
        </div>
    )
}

export default ProjectCardSide

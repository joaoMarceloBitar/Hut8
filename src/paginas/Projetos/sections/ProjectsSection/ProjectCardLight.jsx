import styles from './ProjectCardLight.module.css'

function ProjectCardLight({ title, category, description, image, tags, className }) {
    return (
        <div className={`${styles.card} ${className || ''}`}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.category}>{category}</span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
                            <path d="M16 18h-5" />
                            <path d="M18 5a1 1 0 0 0-1 1v5.573" />
                            <path d="M3 4h9l1 7.246" />
                            <path d="M4 11V4" />
                            <path d="M7 15h.01" />
                            <path d="M8 10.1V4" />
                            <circle cx="18" cy="18" r="2" />
                            <circle cx="7" cy="15" r="5" />
                        </svg>
                    </div>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardLight

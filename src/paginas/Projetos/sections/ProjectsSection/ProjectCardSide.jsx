import styles from './ProjectCardSide.module.css'

function ProjectCardSide({ title, category, description, image, tags }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                    <span>{category}</span>
                </div>
                <p>{description}</p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSide

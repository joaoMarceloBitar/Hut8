import styles from './ProjectsCard.module.css'

function ProjectsCard({ title, description, image, variant }) {
    return (
        <div className={`${styles.card} ${styles[variant]}`} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard

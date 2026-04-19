import styles from './ProjectsSection.module.css'
import ProjectsCard from './ProjectsCard.jsx'

function ProjectsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <ProjectsCard
                    title="Toni Neutzling"
                    description="Redefinindo a experiência de busca..."
                    image="/projectcard1.png"
                    variant="dark"
                />
                <ProjectsCard
                    title="Plante Saúde"
                    description="Monitoramento preditivo de safras..."
                    image="/projectcard2.png"
                    variant="dark"
                />
                <ProjectsCard
                    title="Pastejando"
                    description="Otimização de rotatividade de pasto..."
                    image="/projectcard3.png"
                    variant="light"
                />
                <ProjectsCard
                    title="Hut Admin"
                    description="Dashboard centralizado para gerenciamento..."
                    image="/projectcard4.png"
                    variant="light"
                />
            </div>
        </section>
    )
}

export default ProjectsSection
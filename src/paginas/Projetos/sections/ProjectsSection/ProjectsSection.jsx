import styles from './ProjectsSection.module.css'
import ProjectCardDark from './ProjectCardDark.jsx'
import ProjectCardLight from './ProjectCardLight.jsx'
import ProjectCardSide from './ProjectCardSide.jsx'

function ProjectsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <ProjectCardDark
                    title="Toni Neutzling"
                    description="Redefinindo a experiência de busca por imóveis..."
                    image="/projectcard1.png"
                    gradient="linear-gradient(0deg, rgba(14, 14, 18, 0.9) 0%, rgba(14, 14, 18, 0.4) 50%, rgba(14, 14, 18, 0) 100%)"
                    badges={[
                        { label: "Imobiliária", primary: true },
                        { label: "React Native", primary: false },
                        { label: "PostgreSQL", primary: false }
                    ]}
                    metric="+150%"
                    metricLabel="Leads mensais"
                    buttonText="Ver Caso"
                />
                <ProjectCardDark
                    title="Plante Saúde"
                    description="Monitoramento preditivo de safras..."
                    image="/projectcard2.png"
                    gradient="linear-gradient(0deg, rgba(129, 59, 190, 0.85) 0%, rgba(129, 59, 190, 0.1) 30%, rgba(129, 59, 190, 0) 100%)"
                    badges={[{ label: "Agrotech", primary: true }]}
                    resultText="Aumento de 50% na eficiência"
                    arrowButton={true}
                />
                <ProjectCardLight
                    title="Pastejando"
                    category="Gestão Rural"
                    description="Otimização de rotatividade de pasto..."
                    image="/projectcard3.png"
                    tags={["Flutter", "Firebase", "IoT"]}
                />
                <ProjectCardSide
                    title="Hut Admin"
                    description="Dashboard centralizado para gerenciamento..."
                    image="/projectcard4.png"
                    tags={["React", "Node.js", "PostgreSQL"]}
                    category="Gestão"
                />
            </div>
        </section>
    )
}

export default ProjectsSection
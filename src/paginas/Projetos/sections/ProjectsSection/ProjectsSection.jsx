import styles from './ProjectsSection.module.css'
import ProjectCardDark from './ProjectCardDark.jsx'
import ProjectCardLight from './ProjectCardLight.jsx'
import ProjectCardSide from './ProjectCardSide.jsx'

function ProjectsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <ProjectCardDark
                        className={styles.cardColLeftTop}
                        title="Toni Neutzling"
                        description="Redefinindo a experiência de busca por imóveis com filtros
inteligentes e tours virtuais de alta fidelidade."
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
                        className={styles.cardColRightTop}
                        title="Plante Saúde"
                        description="Monitoramento preditivo de safras
através de análise foliar via IA."
                        image="/projectcard2.png"
                        gradient="linear-gradient(0deg, rgba(129, 59, 190, 0.9) 0%, rgba(129, 59, 190, 0.4) 50%, rgba(129, 59, 190, 0) 100%)"
                        badges={[{ label: "Agrotech", primary: true }]}
                        resultText="Aumento de 50% na eficiência"
                        arrowButton={true}
                    />
                </div>
                
                <div className={styles.row}>
                    <ProjectCardLight
                        className={styles.cardColLeftBottom}
                        title="Pastejando"
                        category="Gestão Rural"
                        description={`Otimização de rotatividade de pasto para produtores de\nleite de médio porte.`}
                        image="/projectcard3.png"
                        tags={["Flutter", "Firebase", "IoT"]}
                    />
                    <ProjectCardSide
                        className={styles.cardColRightBottom}
                        title="Hut Admin"
                        description={`Dashboard centralizado para\ngerenciamento de fluxo de caixa e\nRH corporativo.`}
                        image="/projectcard4.png"
                        features={["Conciliação Automática", "Integração com APIs Bancárias"]}
                        linkText="Ver Detalhes"
                    />
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
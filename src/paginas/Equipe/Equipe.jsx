import styles from './Equipe.module.css'
import CardProfessores from '../../components/layout/CardProfessores/CardProfessores'
import professores from './professoresData'

function Equipe() {

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.bolaBlur}></div>
                <div className={styles.container}>
                    <div className={styles.texto}>
                        <div className={styles.tag}>
                            <div className={styles.bola}></div>
                            <p>A empresa júnior da computação</p>
                        </div>
                        <h1 className={styles.heroTitulo}>
                            Conheça nossa <span>Equipe</span>
                        </h1>
                        <p className={styles.heroSubTitulo}>Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação</p>
                    </div>
                    <img src="foto1-equipe.svg" alt="" className={styles.imagem_1} />
                </div>
            </section>
            <section className={styles.professoresSection}>
                <div className={styles.professores}>
                    <div className={styles.professoresContainerTitulo}>
                        <h2 className={styles.professoresTitulo}>
                            Professores Elo
                        </h2>
                        <div className={styles.linha}></div>
                    </div>
                    <div className={styles.professores_grid}>
                        {professores.map((professores) => (
                            <CardProfessores
                                key={professores.id}
                                nome={professores.nome}
                                cargo={professores.cargo}
                                descricao={professores.descricao}
                                imagem={professores.imagem}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.devsSection}>
                <div className={styles.devs}>
                    <div className={styles.devsContainerTitulo}>
                        <h2 className={styles.professoresTitulo}>
                            Desenvolvedores & Designers
                        </h2>
                        <p>a força criativa por trás de cada linha de código</p>
                    </div>
                    <div className={styles.devsContainerConteudo}>
                        {/*lista de devs e designers, vou fazer os cards antes*/}
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Equipe
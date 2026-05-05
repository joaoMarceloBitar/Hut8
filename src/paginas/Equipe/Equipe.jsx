import styles from './Equipe.module.css'
import CardProfessores from '../../components/layout/CardProfessores/CardProfessores'
import professores from './professoresData'
import CardAlunos from '../../components/layout/CardAlunos/CardAlunos'
import alunos from './alunosData'

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
                    <div className={styles.imagensWrapper}>
                        <img src="foto1-equipe.svg" alt="" className={styles.imagem_1} />
                        <img src="equipe-codigo.svg" alt="" className={styles.imagem_codigo}/>
                    </div>
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
                        <p className={styles.devSubtitulo}>a força criativa por trás de cada linha de código</p>
                    </div>
                    <div className={styles.alunosGridContainer}>
                        <div className={styles.alunosGrid}>
                            {alunos.map((alunos) => (
                                <CardAlunos
                                    key={alunos.Id}
                                    nome={alunos.nome}
                                    area={alunos.area}
                                    ocupacao={alunos.ocupacao}
                                    imagem={alunos.imagem}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Equipe
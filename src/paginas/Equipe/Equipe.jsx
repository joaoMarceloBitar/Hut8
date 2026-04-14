import styles from './Equipe.module.css'
import CardProfessor from '../../components/layout/CardProfessores/'
import professores from './professoresData'

function Equipe() {

    return (
        <main>
            <section>
                <hero className={styles.container}>
                    <div className={styles.texto}>
                        <div className={styles.tag}>
                            <div className={styles.bola}></div>
                            <p>A empresa júnior da computação</p>
                        </div>
                        <h1>
                            Conheça nossa Equipe
                        </h1>
                        <p>Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação</p>
                    </div>
                    <img src="foto1-equipe.svg" alt="" className={styles.imagem_1} />
                </hero>
            </section>
            <section className={styles.professoresSection}>
                <div className={styles.professores}>
                    <div className={styles.professoresContainerTitulo}>
                        <h2 className={styles.professoresTitulo}>
                            Professores Elo
                        </h2>
                        <div className={styles.linha}></div>
                    </div>
                    <div className={styles.professoresContainerConteudo}>
                        {/*lista de professores, vou fazer os cards antes*/}
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
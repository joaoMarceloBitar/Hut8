import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.cima}>
                    <div className={styles.coluna}>
                        <div className={styles.logo}>
                            <img className={styles.logo} src='Logo-Hut8.svg' alt="Logo da Hut8" />
                        </div>
                        <p>Empresa Júnior de Computação da
                            UFPel. Inovação e tecnologia ao
                            alcance do seu negócio.</p>
                        <div className={styles.redes}>
                            <a href="https://x.com/huteight" target="_blank" rel="noopener noreferrer"><img src="twitterIcon.svg" alt="" /></a>
                            <a href="http://facebook.com/hutEight/" target="_blank" rel="noopener noreferrer"><img src="facebooIcon.svg" alt="" /></a>
                            <a href="https://www.instagram.com/hut8_jr/" target="_blank" rel="noopener noreferrer"><img src="instagramIcon.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/company/hut8" target="_blank" rel="noopener noreferrer"><img src="linkedinIcon.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className={styles.coluna}>
                        <h3 className={styles.tituloCol} >Links Rápidos</h3>
                        <ul className={styles.itens}>
                            <Link className={styles.link} to="/">Home</Link>
                            <Link className={styles.link} to="/">Sobre nós</Link>
                            <Link className={styles.link} to="/projetos">Projetos</Link>
                            <Link className={styles.link} to="/equipe">Equipe</Link>
                        </ul>
                    </div>
                    <div className={styles.coluna}>
                        <h3 className={styles.tituloCol}>Serviços</h3>
                        <ul className={styles.itens}>
                            <p>Desenvolvimento Web</p>
                            <p>Aplicativos Mobile</p>
                            <p>Consultoria em TI</p>
                            <p>Sistemas Personalizados</p>
                        </ul>
                    </div>
                    <div className={styles.coluna}>
                        <h3 className={styles.tituloCol}>Contatos</h3>
                        <ul className={styles.itens}>
                            <div className={styles.contato}>
                                <img className={styles.localIcone} src="localPin.svg" alt="" />
                                <p>Rua Gomes Carneiro, nº 1
                                    Centro - CEP: 96010-610
                                    Pelotas, RS - Brasil</p>
                            </div>
                            <div className={styles.contato}>
                                <img className={styles.emailIcone} src="carta.svg" alt="" />
                                <p>hut8@inf.ufpel.edu.br</p>
                            </div>
                            <div className={styles.contato}>
                                <img className={styles.telefoneIcone} src="phone.svg" alt="" />
                                <p>(51) 9 9296-3600</p>
                            </div>
                        </ul>
                    </div>
                </div>


                <div className={styles.baixo}>
                    <div className={styles.copyright}>
                        <p>© 2023 Hut8 Empresa Júnior. Todos os direitos reservados.</p>
                    </div>
                    <div className={styles.termos}>
                        <a href="">Políticas de Privacidade</a>
                        <a href="">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer
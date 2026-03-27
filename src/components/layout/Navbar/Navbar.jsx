import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/Logo-Hut8.svg" alt="Logo Hut8" />
                </div>
                <div className={styles.links}>
                    <a className={styles.link} href="#">Home</a>
                    <a className={styles.link} href="#">Projetos</a>
                    <a className={styles.link} href="#">Serviços</a>
                    <a className={styles.link} href="#">Nossa Equipe</a>
                    <div>
                        <a className={styles.botao} href="#">Fale Conosco</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/Logo-Hut8.svg" alt="Logo Hut8" />
                </Link>
                <div className={styles.links}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/projetos" className={styles.link}>Projetos</Link>
                    <Link to="/servicos" className={styles.link}>Serviços</Link>
                    <Link to="/equipe" className={styles.link}>Nossa Equipe</Link>
                    <div>
                        <Link to="/contato" className={styles.botao}>Fale Conosco</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



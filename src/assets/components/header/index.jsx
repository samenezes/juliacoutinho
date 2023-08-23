import styles from './header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Júlia Maria</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header
import styles from './Header.module.css'
import todoLogo from '../assets/Logo.svg'


export function Header(){
    return (
        <header>
            <div className={styles.content}>
                <img src={todoLogo} alt="Logo" />
            </div>
        </header>
    )
}
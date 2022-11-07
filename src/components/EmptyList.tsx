import styles from './EmptyList.module.css'
import clipboard from '../assets/clipboard.svg'


export function EmptyList() {
    return(
        <div className={styles.content}>
            <img src={clipboard} alt="Imagem de bloco de tarefas" />
            <p className={styles.text}>
                <span>Você ainda não tem tarefas cadastradas<br />
                Crie tarefas e organize seus itens a fazer.</span>
            </p>
        </div>
    )
}
import { PlusCircle } from "phosphor-react"

import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <main>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Adicione uma nova tarefa' />
                    <button type="submit">
                        Criar <PlusCircle size={16} />
                    </button>
                </form>

                <div className={styles.content}>
                    <header className={styles.infos}>
                        <div className={styles.info}>
                            <span className={styles.title}>Tarefas Cridas</span>
                            <span className={styles.count}>5</span>
                        </div>

                        <div className={styles.info}>
                            <span className={styles.title}>Concluídas</span>
                            <span className={styles.count}>2 de 5</span>
                        </div>
                    </header>
                </div>
            </div>
        </main>
    )
}
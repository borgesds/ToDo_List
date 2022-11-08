import { PlusCircle } from "phosphor-react"
import { Task } from "./Task"
import { EmptyList } from "./EmptyList"
import { useState } from "react"

import styles from './TaskList.module.css'
import { v4 as uuidv4 } from "uuid";

export function TaskList() {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Estudar React",
            isCompleted: false,
        },
        {
            id: uuidv4(),
            title: "Estudar TS",
            isCompleted: false,
        }
    ])

    const [newTaskText, setNewTaskText] = useState("")

    function handleCreateNewTask() {
        // não deixa atualizar ou processar na pagina
        event.preventDefault()

        // adicinar dentro do array
        setTasks([
            ...tasks, 
            {
                id: uuidv4(),
                title: newTaskText,
                isCompleted: false,
            }
        ])

        setNewTaskText("")
    }

    function handleNewTaskChange() {
        setNewTaskText(event.target.value)
    }




    return (
        <main>
            <div className={styles.container}>
                <form onSubmit={handleCreateNewTask} action="" className={styles.form}>
                    <input 
                        value={newTaskText} 
                        onChange={handleNewTaskChange}
                        type="text" 
                        placeholder='Adicione uma nova tarefa' 
                    />
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

                {tasks.length === 0 && <EmptyList />}

                {tasks.map((task) => {
                    return (<Task />)
                })}
            </div>
        </main>
    )
}
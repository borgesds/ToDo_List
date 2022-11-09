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

    // onChange => captura valor
    function handleNewTaskChange() {
        setNewTaskText(event.target.value)
    }

    // verificar se esta vazio enão deixa o botão ativado
    const isNewTaskEmpty = newTaskText.length == 0
    
    // alerta se tentar adicionar tarefa vazia
    function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Impossível adicionar uma tarefa vazia!")
    }

    // deletar a tarefa
    function deleteTask() {
        const tasksWithoutDeletedOne = tasks.filter((task) => {
            return task.id != taskToDelete // ??
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function handleToggleTaskCompletion() {
        const taskListCompleted = tasks.map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted //??
            }
            return task
        })

        setTasks(taskListCompleted)
    }



    return (
        <main>
            <div className={styles.container}>
                <form onSubmit={handleCreateNewTask} action="" className={styles.form}>
                    <input 
                        value={newTaskText} 
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        type="text" 
                        placeholder='Adicione uma nova tarefa' 
                        required
                    />
                    <button type="submit" disabled={isNewTaskEmpty}>
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
                    return (<Task 
                                handleToggleTaskCompletion={handleToggleTaskCompletion}
                                isCompleted={task.isCompleted}
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                onDeleteTask={deleteTask}
                            />
                        )
                })}
            </div>
        </main>
    )
}
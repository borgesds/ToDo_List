import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    id: string;
    title: string;
    isCompleted: boolean;
    onDeleteTask: (task: string) => void; //??
    handleToggleTaskCompletion: (id: string) => void; //??
}

export function Task({title, id, isCompleted, 
                     onDeleteTask, handleToggleTaskCompletion}: TaskProps) {

    function handleDeleteTask(){
        onDeleteTask(id)
    }


    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                defaultChecked={isCompleted}
                onClick={() => handleToggleTaskCompletion(id)}
                id={id}
            />
            <label htmlFor={id}>{title}</label>
            <button onClick={handleDeleteTask}>
                <Trash size={24}/>
            </button>
        </div>
    )
}
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <label htmlFor="#">Title</label>
            <button><Trash size={24}/></button>
        </div>
    )
}
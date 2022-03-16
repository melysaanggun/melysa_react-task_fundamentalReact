import styles from "./List.module.css"

export default function List(lists){
  
    return (
        <div className={styles.boxContainer}>
            <p>{lists.title}</p>
        </div>
    )
}
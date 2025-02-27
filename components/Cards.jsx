import styles from "../styles/Cards.module.css";

export default function Cards({title, content}) {
    return (
        <div className={styles.cards}>
            <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            </div>
        </div>
    )
}
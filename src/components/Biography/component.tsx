import { Avatar } from "../Avatar/component"
import styles from './styles.module.css'

export const Bioraphy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Avatar />
            </div>
            <h1 className={styles.name}>Roman Coropat</h1>
            <h2 className={styles.from}>London, United Kingdom</h2>
        </div>
    )
}
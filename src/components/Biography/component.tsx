import { useContext } from "react"
import { Avatar } from "../Avatar/component"
import styles from './styles.module.css'
import { UserContext } from "../../contexts/User"

export const Bioraphy = () => {
    const user = useContext(UserContext);
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Avatar />
            </div>
            <h1 className={styles.name}>{user?.fullName}</h1>
            <h2 className={styles.from}>{user?.from}</h2>
        </div>
    )
}
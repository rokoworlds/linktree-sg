import styles from './styles.module.css'
import { useUserContext } from '../../hooks/useUserContext'

export const Avatar = () => {
    const user = useUserContext()
    return (
        <div className={styles.container}>
            <img
                className={styles.avatar} 
                src={user.url}
                alt="Avatar"
                width={90}
                height={90}
                />
        </div>
    )
}
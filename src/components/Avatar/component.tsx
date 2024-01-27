import { useContext } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../contexts/User'

export const Avatar = () => {
    const user = useContext(UserContext)
    return (
        <div className={styles.container}>
            <img
                className={styles.avatar} 
                src={user?.url}
                alt="Avatar"
                width={90}
                height={90}
                />
        </div>
    )
}
import styles from './styles.module.css'

export const Avatar = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.avatar} 
                src="../../public/avatar.webp"
                alt="Avatar"
                width={90}
                height={90}
                />
        </div>
    )
}
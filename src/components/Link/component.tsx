import styles from './styles.module.css';

export const Link = (title: {title: string}) => {
    return (
        <li className={styles.container}>
            <a className={styles.link} href="/">{title.title}</a>
        </li>
    )
}
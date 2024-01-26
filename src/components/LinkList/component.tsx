import { Link } from "../Link/component";
import styles from './styles.module.css'
const data = ['Github', 'Blog', 'LinkedIn', 'Instagram', 'Portfolio']


export const LinkList = () => {
    return (
        <ul className={styles.container}>
            {data.map((title) => {
                return <Link title={title} />
            })}
        </ul>
    )
}
import { Link } from "../Link/component";
import styles from './styles.module.css'
import { useUserContext } from "../../hooks/useUserContext";


export const LinkList = () => {
    const user = useUserContext();
    const links = user.links
    return (
        <ul className={styles.container}>
            {links.map((link) => {
                return <Link title={link.title} />
            })}
        </ul>
    )
}
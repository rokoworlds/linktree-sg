import { useContext } from "react";
import { Link } from "../Link/component";
import styles from './styles.module.css'
import { UserContext } from "../../contexts/User";


export const LinkList = () => {
    const user = useContext(UserContext);
    const links = user?.links
    return (
        <ul className={styles.container}>
            {links?.map((link) => {
                return <Link title={link.title} />
            })}
        </ul>
    )
}
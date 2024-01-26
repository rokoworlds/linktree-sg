import { Bioraphy } from '../Biography/component'
import { LinkList } from '../LinkList/component'
import styles from './styles.module.css'


export const Card = () => (
    <div className={styles.card}>
        <Bioraphy />
        <p className={styles.description}>"Frontend developer and fantasy writer."</p>
        <LinkList />
    </div>
)
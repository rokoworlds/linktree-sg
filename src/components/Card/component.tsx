import { Bioraphy } from '../Biography/component'
import { LinkList } from '../LinkList/component'
import styles from './styles.module.css'


export const Card = () => (
    <div className={styles.card}>
        <Bioraphy />
        <p>Frontend developer and avid reader</p>
        <LinkList />
    </div>
)
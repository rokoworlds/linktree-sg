import { Bioraphy } from '../Biography/component';
import { LinkList } from '../LinkList/component';
import styles from './styles.module.css';
import {data} from '../../data/mock';
import { useState } from 'react';
import { UserContext } from '../../contexts/User';

interface Link {
    id: number;
    title: string;
    url: string;
}

export interface User {
    id: number;
    fullName: string;
    from: string;
    description: string;
    url: string;
    links: Link[];
}

export const Card = () => {
    const [user] = useState<User>(data.user)
    console.log(user)
    return (
    <div className={styles.card}>
        <UserContext.Provider value={user}>
            <Bioraphy />
            <p className={styles.description}>{user.description}</p>
            <LinkList />
        </UserContext.Provider>
    </div>
    )
}

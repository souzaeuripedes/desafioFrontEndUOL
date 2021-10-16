import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import styles from './styles.module.scss'

interface IUserProps {
    userId: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    userStatus: string;
}

export function UserCard({ userId, userName, userEmail, userPhone, userStatus }: IUserProps) {
    const [colorStatus, SetColorStatus] = useState("");
    
    useEffect(() => {
        if(userStatus === "active")  SetColorStatus("green");
        if(userStatus == "inactive") SetColorStatus("red");
        if(userStatus == "waiting") SetColorStatus("yellow");
        if(userStatus == "disabled") SetColorStatus("grey");
      }, [])

    return (
        <div className={styles.userCardContainer}>
            <div className={styles.userCardContent}>
                <div>
                    <h4>{userName}</h4>
                </div>
                <div>
                    <p className={styles.userCardEmail}>{userEmail}</p>
                </div>
            </div>
            <div className={styles.userCardContent}>
                <div>
                    <h4>{userId}</h4>
                </div>
                <div>
                    <p>{userPhone}</p>
                </div>
            </div>
            <div className={styles.userCardStatusContent}>
                <div>
                    <span className={styles.userCardDot} style={{background:colorStatus}} />   
                </div>
                <div>
                    <p className={styles.userCardStatus}>{userStatus}</p>
                </div>
            </div>
            <div>
                <Link href={'/editclient'}>            
                    <a><Button buttonClass={'secondary'} buttonText={'Editar'}/></a> 
                </Link>
            </div>
        </div>
    )
}
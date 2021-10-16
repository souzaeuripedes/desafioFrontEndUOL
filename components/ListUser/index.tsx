import { Button } from '../Button'
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import { UserCard } from '../UserCard'
import { Link } from '../Link'
export interface Customer {
  id:string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export function ListUser() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [storage, setStorage] = useState<Customer[]>([])

  
  useEffect(() => {
      fetch('https://test-frontend-uolpp.web.app/customers.json')
        .then((response)=> {
          return response.json()
        }) 
        .then((data) => {
          setCustomers(data.customers)
          localStorage.setItem("customers",JSON.stringify(data.customers)); 
          let a = (localStorage.getItem("customers"));
          console.log(a +"aaaaaaaaaaaaaaaaaaaa");
          //localStorage.setItem("customers",JSON.stringify(data.customers).concat(JSON.stringify(data.customers)) )
          console.log(localStorage.getItem("customers"));
        })
      }, [])
    
   
  return (
    <section className={styles.listUserContainer}>
      <div className={styles.listUserContent}> 
        <h3>Listagem de usuários</h3>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <div className={styles.listUserButton}>
          <Link href={'/newclient'}>            
             <a><Button buttonClass={'primary'} buttonText={'Novo Cliente'}/></a> 
          </Link>
        </div>
          {customers.map((value, key) => {
            return(
               <UserCard userId={value.id} userName={value.name} 
                  userEmail={value.email} userPhone={value.phone} userStatus={value.status} key={key} />
              );
          })}
      </div>
    </section>
  )
}



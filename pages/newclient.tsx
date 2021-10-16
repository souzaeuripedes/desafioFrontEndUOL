import React from 'react'
import { Button } from '../components/Button'
import { ClientPanel } from '../components/ClientPanel'
import FormCreateClient from '../components/FormCreateClient'
import { Header } from '../components/Header'
import { Link } from '../components/Link'

export default function NewClient() {
  

  return (
    <>
      <Header />
      <ClientPanel />
      <FormCreateClient />
      <div style={{marginLeft:"8rem", marginTop:"2rem"}}>
        <Link href={'/'}>
          <a style={{marginRight:"1rem"}}><Button buttonClass={'primary'} buttonText={'Criar'} /></a>
        </Link>
        <Link href={'/'}>
          <a><Button buttonClass={'secondary'} buttonText={'Voltar'} /></a>
        </Link>
      </div>
    </>
  )
}

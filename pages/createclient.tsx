import React from 'react'
import { ClientPanel } from '../components/ClientPanel'
import { Header } from '../components/Header'
import { ListUser } from '../components/ListUser'

export default function Home() {

  return (
    <>
      <Header/>
      <ClientPanel/>
      <ListUser/>
    </>
  )
}

import React from 'react'
import Header from './Header'
import Nabvar from './Nabvar'
import FOOTER from './Footer'
import Copyright from './Copyright'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Nabvar/>
      <Outlet/>
      <FOOTER/>
      <Copyright/>
      <ScrollRestoration/>
    </>
  )
}

export default RootLayout



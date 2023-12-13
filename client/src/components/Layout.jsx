import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from "./Footer"
import Linkpics from './Linkpics'


export default function Layout(){
  return(
    <div className="site-wrapper">
    <Header />
    
    <Outlet />
    <Linkpics />
    <Footer />
    </div>
  )
} 
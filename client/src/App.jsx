import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Surfboards from './pages/Surfboards'
import Wetsuits from './pages/Wetsuits'
import Accessories from './pages/Accessories'
import Owner from './pages/Owner';
import Layout from './components/Layout'
import './App.css'
import WetsuitDetails from './pages/WetsuitDetails';
import SurfboardDetails from './pages/SurfboardDetails';
import AccessoriesDetails from './pages/AccessoriesDetails';



  function App() {

  return (
  
    <BrowserRouter>
  
    <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/surfboards" element={<Surfboards />} />
          <Route path="/wetsuits" element={<Wetsuits />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/wetsuits/:id" element={<WetsuitDetails />} />
          <Route path="/accessories/:id" element={<AccessoriesDetails />} />
          <Route path="/surfboards/:id" element={<SurfboardDetails />} />
          <Route path="/owner" element={<Owner />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  
  )
}

export default App



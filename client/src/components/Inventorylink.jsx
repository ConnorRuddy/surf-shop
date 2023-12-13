import React from 'react'
import { Link } from 'react-router-dom'

export default function Inventorylink(){
  return (
    <>
    <div className='owner-link'>
  <Link to="/owner">Admin</Link>
      </div>
    </>
  )
}
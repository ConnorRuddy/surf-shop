import React from 'react'
import Inventorylink from './Inventorylink'
import Payment from './Payment'

export default function Footer(){
  return(
    <>
    <div className ="home-footer-container">
  <div className="home-footer">
    <h5>COMPANY</h5>
    <ul>
      <li>Shipping & Return</li>
      <li>Blog</li>
      <li>Contact Us</li>
    </ul>
  </div>
  <div className="home-footer">
    <h5>INFORMATION</h5>
  <ul>
      <li>About Us</li>
      <li>Customer Service</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
  <div className="home-footer">
    <h5>NEWSLETTER</h5>
    <p>Make sure you never miss shop events, discounts, new product releases and more by joining our Newsletter</p>
    <input type="text" placeholder="Email Address"></input>
  </div>
  <div className="home-footer">
    <h5>PAYMENT OPTIONS</h5>
    <div className="card-container">
      <Payment />
      </div>
  </div>
    </div>
  <footer> 2023, Virginia Beach 
 <Inventorylink />   
  </footer>
  </>
  )
}
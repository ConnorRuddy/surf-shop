import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';



export default function Payment() {
  //paypal, applepay, visa, amex, mastercard, discover
  return(
    <div className="cc-container">
      <FontAwesomeIcon icon ={faCreditCard} className="payment-cc" ></FontAwesomeIcon>
      <FontAwesomeIcon icon ={faCreditCard} className="payment-cc" ></FontAwesomeIcon>
      <FontAwesomeIcon icon ={faCreditCard} className="payment-cc" ></FontAwesomeIcon>
      <FontAwesomeIcon icon ={faCreditCard} className="payment-cc" ></FontAwesomeIcon>
      <FontAwesomeIcon icon ={faCreditCard} className="payment-cc" ></FontAwesomeIcon>
    </div>
  )
}
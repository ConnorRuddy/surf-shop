import React from 'react'
import {useState} from 'react'


const Context = React.createContext()

function ContextProvider({children}){
  const [cartItems, setCartItems] = useState([])

  function addToCart(newItem){
    setCartItems(prevItems => [...prevItems, newItem])
  }

  return (
    <Context.Provider value="">
      {children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}
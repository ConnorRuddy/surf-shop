import React from 'react'
import { Link } from 'react-router-dom'


export default function Linkpics(){

  return (
    <>
    <div className="home-link-container">
    <Link to ="/surfboards"><img src="https://cdn11.bigcommerce.com/s-pllu8dargz/product_images/uploaded_images/h-section-2-img-stepdriver.png?t=1640984387&_gl=1*1adikgy*_ga*MTA1ODQ0MTU0Ny4xNjQwMTg4NzYw*_ga_WS2VZYPC6G*MTY0MDk4NDM3My40OC4xLjE2NDA5ODQ0MzUuNjA." className='image-link' /><div className="link-title">Shop Surfboards</div></Link>
    <Link to ="/wetsuits"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IwTdcjNHu5JB7-N8BgyYSeGzdJ4D7xvATg&usqp=CAU" className="image-link"/><div className="link-title">Shop Wetsuits</div> </Link>
    <Link to ="/accessories"> <img src="https://lanzasurf.com/wp-content/uploads/2023/03/surf-traction-pad.jpeg" className="image-link"/><div className="link-title">Shop Accessories</div> </Link>
    </div>
      </>
  )
}
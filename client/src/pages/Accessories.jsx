import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
// import {Context} from '../Context'

export default function Accessories(){
  const [accessory, setAccessory]= useState([]);

  useEffect(() => {
    getAccessories();
  }, []);
  
  function getAccessories(){
    axios.get('/api/accessories')
    .then((res) => setAccessory(res.data))
    .catch((err) => console.log(err));
  }
return (
  <div className="product-container">
     <h1 className ="products-title">Accessories</h1>
    <div className="card-wrap">
      {accessory.map((accessory) => (
        <div className="card" key={accessory.id}>
          <Link to={`/accessories/${accessory._id}`}>
          <img src={accessory.image} className="card-image"/>
          </Link>
          <h3 className="card-title">{accessory.brand}</h3>
          <ul className="card-description">
            <li><strong>Model: </strong>{accessory.model}</li>
            <li><strong>Size: </strong>{accessory.size}</li>
            <li><strong>Price:</strong> ${accessory.value}</li>
          </ul>
          </div>
      ))}
    </div>
    </div>

);
      }
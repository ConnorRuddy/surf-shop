
import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react';



export default function Surfboards(){
  const [surfboard, setSurfboard] = useState([]);


  useEffect(() => {
    getSurfboards();
  }, []);
  
  function getSurfboards(){
    axios.get('/api/surfboards')
    .then((res) => setSurfboard(res.data))
    .catch((err) => console.log(err));
  }

return (
  <>
  <div className="product-container">
   <h1 className ="products-title">Surfboards</h1>
    <div className="card-wrap">
      {surfboard.map((board) => (
        <div className="card" key={board.id}>
         <Link to={`/surfboards/${board._id}`}>
          <img src={board.image} className="card-image"/>
          </Link>
          <h3 className="card-title">{board.brand}</h3>
          <ul className="card-description">
            <li><strong>Model:</strong> {board.model}</li>
            <li><strong>Size: </strong>{board.size}</li>
            <li><strong>Price: </strong>$ {board.value}</li>
          </ul>
          </div>

      ))}
    </div>
    </div>
    </>

);
      }
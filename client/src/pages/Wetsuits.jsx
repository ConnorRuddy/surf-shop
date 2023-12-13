
import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function Wetsuits(){
  const [wetsuit, setWetsuit] = useState([]);

  useEffect(() => {
    getWetsuits();
  }, []);
  
  function getWetsuits(){
    axios.get('/api/wetsuits')
    .then((res) => setWetsuit(res.data))
    .catch((err) => console.log(err));
  }

return (
  <div className="product-container">
     <h1 className ="products-title">Westuits</h1>
    <div className="card-wrap">
      {wetsuit.map((wetsuit) => (
        <div className="card" key={wetsuit._id}>
          <Link to={`/wetsuits/${wetsuit._id}`}>
          <img src={wetsuit.image} className="card-image"/>
          </Link>
          <h3 className="card-title">{wetsuit.brand}</h3>
          <ul className="card-description">
            <li><strong>Model: </strong>{wetsuit.model}</li>
            <li><strong>Size: </strong>{wetsuit.size}</li>
            <li><strong>Price: </strong>${wetsuit.value}</li>
          </ul>
        </div>
      ))}
  </div>
</div>

);
}
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function WetsuitDetails() {
  const { id } = useParams();
  const [wetsuit, setWetsuit] = useState({});

  useEffect(() => {
  
    axios.get(`/api/wetsuits/${id}`)
      .then((res) => setWetsuit(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
    <div className="detail-container">
      <img src={wetsuit.image} className="detail-image"/>
      <div className="detail-info">
      <ul>
        <li><h1>{wetsuit.brand}</h1></li>
        <li><h3>{wetsuit.model}</h3></li>
        <li><h3>Size:{wetsuit.size}</h3></li>
        <li><h3 className="price">${wetsuit.value}</h3></li>
      </ul>
      <p>{wetsuit.description}</p>
      <button className="cart-button">Add To Cart</button>
      </div>
    </div>
    </>
  );
}


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function AccessoriesDetails() {
  const { id } = useParams();
  const [accessory, setAccessory] = useState({});

  useEffect(() => {
  
    axios.get(`/api/accessories/${id}`)
      .then((res) => setAccessory(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
    <div className="detail-container">
      <img src={accessory.image} className="detail-image"/>
      <div className="detail-info">
      <ul>
        <li><h1>{accessory.brand}</h1></li>
        <li><h3>{accessory.model}</h3></li>
        <li><h3>Size:{accessory.size}</h3></li>
        <li><h3 className="price">${accessory.value}</h3></li>
      </ul>
      <p>{accessory.description}</p>
      <button className="cart-button">Add To Cart</button>
      </div>
    </div>
    </>
  );
}
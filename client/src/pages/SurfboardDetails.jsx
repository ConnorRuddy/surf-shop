import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function SurfboardDetails() {
  const { id } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
  
    axios.get(`/api/surfboards/${id}`)
      .then((res) => setBoard(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
    <div className="detail-container">
      <img src={board.image} className="detail-image"/>
      <div className="detail-info">
      <ul>
        <li><h1>{board.brand}</h1></li>
        <li><h3>{board.model}</h3></li>
        <li><h3>Size:{board.size}</h3></li>
        <li><h3 className="price">${board.value}</h3></li>
      </ul>
      <p>{board.description}</p>
      <button className="cart-button">Add To Cart</button>
      </div>
    </div>
    </>
  );
}
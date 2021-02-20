import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import '../css/shop.css'


function Shop() {

    const { id } = useParams();   
    const [event, setEvent] = useState({}) ;
      
    //server-- app.get('/get/events:id' ..      

    useEffect(async () => {         
    const response = await fetch(`http://localhost:8000/events/${id}`);
    const data = await response.json();
    
    setEvent(data);
}, [])
   
return (
    <section className="buy-section">
      <div className="buy-container">
        <h3 className="ticket-score">
          You are about to score some tickets to
        </h3>
        <h1 className="ticket-title">
          {event.title}
        </h1>
        <div className="date-time">
          <span className="date-full">{event.datefull}</span>
          <span className="time">kl {event.time}</span>
        </div>
        <h4 className="location">@ {event.location}</h4>
        <h2 className="price">{event.price} sek</h2>
        <Link to={`/tickets/${id}`} className="btn">Beställ</Link>
      </div>

    </section>
  );
}

export default Shop;
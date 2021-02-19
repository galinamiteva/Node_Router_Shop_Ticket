import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


function Shop() {

    const { id } = useParams();
    
    const [ event, setEvent ] = useState({});
        
       
       
        useEffect(async () => {          
        const response = await fetch(`http://localhost:8000/get/events/${id}`);
        const data = await response.json();
        
        setEvent(data);
    }, [])

   
    return (
        <section className="buy-section">
          <div className="buy-container">
            <h3 className="score-tickets">
              You are about to score some tickets to
            </h3>
            <h1 className="ticket-title">
              {event.title}
            </h1>
            <div className="date-and-time">
              <span className="date">{event.date}</span>
              <span className="time">Kl {event.time}</span>
            </div>
            <h4 className="location">@ {event.location}</h4>
            <h2 className="price">{event.price} sek</h2>
           <Link to={`tickets/${id}`} className="btn link-btn">Order</Link> 
          </div>
    
        </section>
      );
}

export default Shop;
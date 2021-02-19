import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Tickets () {
    const { id } = useParams();
    
    const [ event, setEvent ] = useState({}); 
       
    useEffect(async () => {
        const response = await fetch(`http://localhost:8000/get/events/${id}`);    
        const data = await response.json();
        setEvent(data);
              
    }, [])   



      const date= event.date

      return (

        <section className="ticket-section">
            <div className="ticket-container">
                <h1 className="confirmation">Thanks for the order</h1>
                <div className="ticket-content">
                    <div className="what">
                        <span>what</span>
                        <h4>{event.title}</h4>
                    </div>
                    <div className="where">
                        <span>where</span>
                        <h4>{event.location}</h4>
                    </div>
                    <div className="time-and-date">
                        <div className="date">
                            <span>when</span>
                            <h5>{date}</h5>
                        </div>
                        <div className="from">
                            <span>from</span>
                            <h5>{event.from}</h5>
                        </div>
                        <div className="to">
                            <span>to</span>
                            <h5>{event.to}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tickets;
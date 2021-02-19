import React, { useEffect, useState } from 'react';



import View from './View'

function Events () {
    const [events, setEvents] = useState([]);
    
    
  
       useEffect(async () => {
        const response = await fetch('http://localhost:8000/get/events');    
        const data = await response.json();
        setEvents(data);
        
    }, [])   

      
    return (
        <>         
          <section className="events-section">
            <h2 className="title">events</h2>
            {
              events.map((index, key) => <View key={key} value={index} />)
            }
          </section>
        </>
      );
}
export default Events;
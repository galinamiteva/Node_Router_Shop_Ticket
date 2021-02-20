import React, { useEffect, useState } from 'react';

import View from './View';
import '../css/events.css';

function Events () {
    const [events, setEvents] = useState([]);
    
    
                                            //server --  app.get('/events',
       useEffect(async () => {
        const response = await fetch('http://localhost:8000/events');    
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
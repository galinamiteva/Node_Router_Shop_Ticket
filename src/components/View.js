import React from 'react';
import { Link } from 'react-router-dom';

function View ({value}) {
const date = value.date

return (
<Link to = {`/buy/${value.id}`} className={`event`}>
    <div className = 'event-container'>
        <div className='event-date'>
            <h3 className='date'>{date}</h3>
        </div>
        <div className='event-info'>
            <h2 className='event-title'>{value.title}</h2>
            <h4 className='event-location'>{value.location}</h4>
            <div className='event-time-price'>
                <h3 className='event-time'>{value.time}</h3>
                <h3 className='event-price'>{value.price}kr</h3>
            </div>
        </div>
    </div>
</Link>

);
}

export default View;
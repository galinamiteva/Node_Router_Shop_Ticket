import React from 'react';
import { Link } from 'react-router-dom';

function View (props) {
const date = props.value.date

return (
<Link to = {`/buy/${props.value.id}`} className={`event`}>
    <div className = 'event-container'>
        <aside className='event-date-box'>
            <h3 className='event-date'>{date}</h3>
        </aside>
        <div className='event-info-box'>
            <h2 className='event-title'>{props.value.title}</h2>
            <h4 className='event-location'>{props.value.location}</h4>
            <div className='event-time-and-price-box'>
                <h3 className='event-time'>{props.value.time}</h3>
                <h3 className='event-price'>{props.value.price}kr</h3>
            </div>
        </div>
    </div>
</Link>

);
}

export default View;
import React from 'react';

function Card({event}) {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <h2>{event.start}</h2>
            <h2>{event.end}</h2>
        </div>
    )
}
export default Card;
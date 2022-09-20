import React from 'react';
import Card from './Card';

function SearchList({filteredEvent}){
    const filtered = filteredEvent.map(event => <Card key={event.event_id} event={event}/>);
    return(
        <div>
            {filtered}
        </div>
    )
}

export default SearchList;
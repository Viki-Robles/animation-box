import React from 'react';


export default function ItemContainer({ details, name}) {
    return(
        <div className='ItemContainer'>
            <div className='ItemContainer-details'>
                {details}
            </div>
            <div className='ItemContainer-name'>
                {name}
            </div>
        </div>
    )
}
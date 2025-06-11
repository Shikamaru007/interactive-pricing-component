import React, {useState} from 'react';
import './App.css'

const RangeCard = () => {

    const [value, setValue] = useState(50);

    return(
        <>
            <div className="slider-container">
               <div className="top">
                    <span className="page-view">100K PAGEVIEWS</span>
                    <input type='range'
                           min={0}
                           max={100}
                           value={value}
                            />
               </div> 
               
            </div>
        </>
    )
}

export default RangeCard;
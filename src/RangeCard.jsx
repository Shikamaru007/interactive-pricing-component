import React, {useState, useRef} from 'react';
import checkIcon from '../public/icon-check.svg'
import './App.css'

const RangeCard = () => {

    const [value, setValue] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const btnRef = useRef(null)
    
    
    
  
    const handleChange = (e) => {
        setValue(e.target.value)        
    };

    const handlePointerDown = () => {
        setIsDragging(true)
    };
    const handlePointerUp = () => {
        setIsDragging(false)
        console.log(isDragging);
    };
    const handleToggle = () => {
        
        if(isActive){
            btnRef.current.classList.remove('active');
            setIsActive(false)
        }else{
            btnRef.current.classList.add('active');
            setIsActive(true)
        }
        
    };


    return(
        <>
            <div className="slider-container">
               <div className="top">
                    <div className="slider-section">
                        <span className="page-view">100K PAGEVIEWS</span>
                        <div className="slider-wrapper">
                            <input type='range'
                                style={{background: `linear-gradient(to right,  hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%)`}}
                                min={0}
                                max={100}
                                value={value}
                                onChange={(e) => handleChange(e)}
                                onPointerDown={handlePointerDown}
                                onPointerUp={handlePointerUp}
                                className= {`slider ${isDragging ? "dragging" : ""}`}/>
                        </div>
                        <span className='amount'><span className='price'>$16.00</span>/ month</span>
                    </div>
                    <div className="billing-section">
                        <span>Monthly Billing</span>
                        <button className='toggle' onClick={handleToggle} ref={btnRef}><span className='toggle-icon'></span></button>
                        <div className="yearly-billing">
                            <span>Yearly Billing</span>
                            <span className='percent'>-25% <span className="discount">discount</span></span>
                        </div>
                    </div>
                    
                    
               </div> 
               <hr />
               <div className="bottom">
                    <div className="fea">
                        <span className='features'><img src={checkIcon} alt="check"/>Unlimited Websites</span>
                        <span className='features'><img src={checkIcon} alt="check"/>100% Data Ownership</span>
                        <span className='features'><img src={checkIcon} alt="check"/>Email Reports</span>
                    </div>
                    <button className='trialBtn'>Start my trial</button>
               </div>
               
            </div>
        </>
    )
}

export default RangeCard;
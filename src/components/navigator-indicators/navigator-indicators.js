import React from "react";
import './navigator-indicators.sass'


const NavigatorIndicators = ({position})=>{
return(
    <ul className='nav-indicators'>
        <li className="nav-indicator"><a href="#" className="nav-indicator-link active"></a></li>
        <li className="nav-indicator"><a href="#" className="nav-indicator-link"></a></li>
        <li className="nav-indicator"><a href="#" className="nav-indicator-link"></a></li>
        <li className="nav-indicator"><a href="#" className="nav-indicator-link"></a></li>
        <li className="nav-indicator"><a href="#" className="nav-indicator-link"></a></li>
    </ul>)
};

export default NavigatorIndicators
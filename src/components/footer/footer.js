import React from "react";
import  telegram from './telegram.svg';
import  whatsapp from './whatsapp.svg';
import chat from './chat.svg'
import './footer.sass'

const Footer= ()=> {
    return(
        <footer>
            <div className="socials">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className='social-href' href="#"> <img className='social-icon' src={telegram} alt="telegram icon"/></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className='social-href' href="#"> <img className='social-icon' src={whatsapp} alt="whatsapp icon"/></a>

            </div>
            <button className='chat'>
                <img className='chat-img' src={chat} alt="telegram icon"/>
            </button>
        </footer>
    )

};
export default Footer

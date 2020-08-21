import React from "react";
import logo from "../../img/logo.svg";
import './app-header.sass'


const AppHeader =()=>{
  return(  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="navs">
           <li className='navs-item'><a className='navs-item-link' href="http://">Услуги</a></li>
           <li className='navs-item'><a className='navs-item-link' href="http://">О нас</a></li>
           <li className='navs-item'><a className='navs-item-link' href="http://">Наши работы</a></li>
           <li className='navs-item'><a className='navs-item-link' href="http://">Контакты</a></li>
        </ul>

    </header>)
};

export default AppHeader
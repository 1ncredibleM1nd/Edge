import React,{Component} from "react";
import './services.sass'
import mobile from './mobile.svg'
import sites from './sites.svg'
import bots from './bots.svg'
import arrow from './arrow-green.svg'

const Services = ()=>{
    return(
        <div className="services">
            <div className="right">
            <h1 className='command-header'>Мы разберемся</h1>
                <div className="command-subline"/>
                <ul className="togglers">
                   <li className='toggler active-toggler'> <p className="toggler-identifer">01 </p> <p className="toggler-description">Разработка сайтов</p></li>
                   <li className='toggler'> <p className="toggler-identifer">02 </p> <p className="toggler-description">Разработка приложений</p></li>
                   <li className='toggler'> <p className="toggler-identifer">03 </p> <p className="toggler-description">Боты</p></li>
                </ul>
            </div>
            <div className="left-description">
                <div className="icons">
                    <div className="icon-wrapper active-icon">
                        <img className='mobile' src={mobile} alt="icon"/>
                    </div>
                    <div className="icon-wrapper">
                        <img src={sites} alt="icon"/>
                    </div>
                    <div className="icon-wrapper">
                        <img src={bots} alt="icon"/>
                    </div>
                </div>
                <div className="icons-descriptions">
                    <div className="active-description">
                        <h2 className='command-name mb-5'>01 Разработка сайтов</h2>
                         <p className="command-description">Наша команда на 100% знает, что нужно Вашему будущему сайту, чтобы стать успешным</p>
                           <button className='button-beginning'>
                               Начать
                               <img src={arrow} alt="arrow"/>
                           </button>
                    </div>
                    <div className="description">
                        <h2 className='command-name'>02 Разработка приложений</h2>
                         <p className="command-description">Наша команда на 100% знает, что нужно Вашему будущему приложению, чтобы стать успешным</p>
                        <button className='button-beginning'>
                            Начать
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </div>
                    <div className="description">
                        <h2 className='command-name'>03 Разработка ботов</h2>
                         <p className="command-description">Наша команда имеет опыт в разработке действительно удобных ботов, которые смогут помочь Вашему бизнесу</p>
                        <button className='button-beginning'>
                            Начать
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </div>
                </div>
                </div>
            </div>


    )


};


export default Services
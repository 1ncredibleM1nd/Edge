import React from 'react'
import './command.sass'
import Alexandra from './sasha.svg'
import arrowLeft from'./arrow-left.svg'
import arrowRight from'./arrow-right.svg'
const Carousel = () => {
    return (
        <div className="command">
            <img className='command-image' src={Alexandra} alt="alexandra"/>
            <div className="left">
                <h2 className='command-header'> Кто мы такие?</h2>
                <div className="command-subline"/>
                <h3 className='command-name'>Александра Юшкова</h3>
                <h4 className='command-post'>Дизайнер</h4>
                <p className='command-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at, consequuntur dolorem doloribus est et exercitationem, </p>
                <div className="command-indicators">
                    <button className='indicator-btn'>
                        <img src={arrowLeft} alt="prev"/>
                    </button>
                    <div className="command-iterators">
                        <div className="iterator">
                            <div className="flag"/>
                            <p className="number">01</p>
                        </div>
                        <div className="iterator active-flag">
                            <div className="flag"/>
                            <p className="number">02</p>
                        </div>
                        <div className="iterator">
                            <div className="flag"/>
                            <p className="number">02</p>
                        </div>
                    </div>
                    <button className='indicator-btn'>
                        <img src={arrowRight} alt="next"/>
                    </button>
                </div>
            </div>
        </div>
    )
};


export default Carousel
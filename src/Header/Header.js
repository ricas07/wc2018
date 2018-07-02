import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='cell'>
            </div>
            <div className='cell'>
                Round of 16 <br/>
                8
            </div>
            <div className='cell'>
                Quarter-finals <br/>
                8
            </div>
            <div className='cell'>
                Semi-finals <br/>
                6
            </div>
            <div className='cell'>
                Third Place <br/>
                2
            </div>
            <div className='cell'>
                Championship <br/>
                4
            </div>
            <div className='cell'>
                Total <br/>
                28
            </div>
        </div>
    )
};

export default Header;

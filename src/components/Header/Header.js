import React from 'react';
import './Header.css'

const Header = props => {
    
    return (
        <div className='navbar'>
            <ul>
                {/* logo */}
                <li className='brand'>React Memorization</li>

                {/* title */}
                <li>{ props.message ? props.message : 'Click on any image to begin!' }</li>

                {/* scores */}
                <li>Score: { props.currentScore } | Top Score: { props.topScore }</li>
            </ul>
        </div>
    )
}


export default Header;
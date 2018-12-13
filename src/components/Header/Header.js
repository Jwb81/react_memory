import React from 'react';
import './Header.css'

const Header = props => {
    
    return (
        <div className='navbar'>
            <ul>
                {/* logo */}
                <li className='brand'>Brand</li>

                {/* title */}
                <li>Allo</li>

                {/* scores */}
                <li>Score: { props.currentScore } | Top Score: { props.topScore }</li>
            </ul>
        </div>
    )
}


export default Header;
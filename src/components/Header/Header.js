import React from 'react';
import './Header.css'

const Header = props => {
    
    return (
        <div>   
            Score: { props.currentScore } | Top Score: { props.topScore }
        </div>
    )
}


export default Header;
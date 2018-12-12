import React from 'react';
import './GamePiece.css';


const GamePiece = props => {
    const backgroundStyle = {
        backgroundImage: `url(${props.character.url})`,
        backgroundSize: 'cover'
    }
    
    return (
        <div 
        className='gamepiece'
        style={backgroundStyle}
        onClick={ () => props.handleCardClick(props.character.name) }    
        >
            {/* <img src={ props.character.url } alt={ props.character.name }></img> */}
        </div>
    )
}

export default GamePiece;
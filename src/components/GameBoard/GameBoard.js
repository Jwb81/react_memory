import React from 'react';
import GamePiece from '../GamePiece/GamePiece';
import './GameBoard.css'

function GameBoard (props) {

    
    return (
        <div>
            <div className='gameboard'>
                {props.characters.map((char, index) => {
                    return <GamePiece character={char} key={ index } handleCardClick={ props.handleCardClick }/>
                })}
            </div>

            {/* <button onClick={ props.shuffle }>Shuffle Cards</button> */}
        </div>
    )
}



export default GameBoard;
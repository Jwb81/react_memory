import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header'

import characters from './characters';

class App extends Component {
  state = {
    current_score: 0,
    top_score: 0,
    max_score: characters.length,
    character_array: characters,
    selected: [],
  }

  handleCardClick = (name) => {
    let currentScore = this.state.current_score;
    const topScore = this.state.top_score;
    const gameBoard = document.getElementsByClassName('gameboard')[0];
    
    // get each gamepiece and remove the shake animation class
    const cards = Array.from(document.getElementsByClassName('gamepiece'));
    cards.forEach(card => card.classList.remove('shake'));

    gameBoard.classList.remove('win-game');
    
    const alreadyClicked = this.state.selected.filter(val => val === name).length;

    // shuffle the cards
    this.shuffle();


    // if the name is found, then reset state
    if (alreadyClicked) {
      this.setState({
        current_score: 0,
        selected: [],
      });

      // add the shake animation to each gamepiece
      cards.forEach(card => card.classList.add('shake'));

      return;
    }

    // add one since current score is used if a card that has never been selected is clickec
    currentScore++;
    
    if (currentScore > topScore) {
      this.setState({
        top_score: currentScore
      });
    }
    
    this.setState({
      selected: this.state.selected.concat(name),
      current_score: currentScore
    });

    // check if the player has won
    // if (currentScore === this.state.max_score) {
    if (currentScore === 2) {
      // this.state.game_status = 'win'
      gameBoard.classList.add('win-game');
    
  }
  }

  shuffle = () => {

    let array = this.state.character_array;

    let currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({
      character_array: array
    })
  }

  render() {
    return (
      <div className="App">
        <Header currentScore={ this.state.current_score } topScore={ this.state.top_score }/>
        
        <header className="App-header">
          <h1>Click the icons to play!</h1>
          <p className='header-instructions'>This is a game of memorization.  The goal is to click all cards before clicking on one card twice.</p>
        </header>
        
        <GameBoard characters={ this.state.character_array } handleCardClick={ this.handleCardClick }/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header'

import characters from './characters';

class App extends Component {
  state = {
    current_score: 0,
    top_score: 0,
    max_score: characters.length,
    character_array: characters,
    selected: []
  }

  handleCardClick = (name) => {
    let currentScore = this.state.current_score;
    const topScore = this.state.top_score;
    
    
    
    const alreadyClicked = this.state.selected.filter(val => val === name).length;

    // shuffle the cards
    this.shuffle();


    // if the name is found, then reset state
    if (alreadyClicked) {
      this.setState({
        current_score: 0,
        selected: []
      });

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

    this.shuffle();
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
        
        <GameBoard characters={ this.state.character_array } handleCardClick={ this.handleCardClick }/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;

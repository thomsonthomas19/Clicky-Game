import React, { Component } from "react";
import FighterCard from "./components/FighterCard";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import fighters from "./fighters.json";
import "./App.css";



class App extends Component {

  // create state obj
  state = {
    fighters,
    curScore: 0,
    highScore: 0,
    msg: "",
    clicked: []
  };

  
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  shuffleFighters = () => {
    let shuffledFighters = shuffleArray(fighters);
    this.setState({ fighters: shuffledFighters });
  };
  
  raiseScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      curScore: newScore,
      msg: ""
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
      this.setState({ msg: "New high score" });
    }
    this.shuffleFighters();
  };
  
  clickEvent = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.raiseScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetBoard();
    }
  };
  
  resetBoard = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      msg: "Better luck next time",
      clicked: []
    });
    this.shuffleFighters();
  };
  
  
  render() {
    return (
      <Wrapper>
        <ScoreCard
        title="Smash Fighters Click Game"
        curscore={this.state.curScore}
        highScore={this.state.highScore}
        msg={this.state.msg}
        />
        {this.state.fighters.map(fighter => {
          return (
            <FighterCard
            id={fighter.id}
            key={fighter.id}
            name={fighter.name}
            image={fighter.image}
            clickEvent={this.clickEvent}
            raiseScore={this.raiseScore}
            resetBoard={this.resetBoard}
            shuffleFighters={this.shuffleFighters}
            
            />
            )
          })}
      </Wrapper>
    );
  }
}

export default App;

// handleRemovefighter = (id) => {
//   // use array filter to create new array of fighters with all fighters WITHOUT that id
//   const newfighters = this.state.fighters.filter(fighter => fighter.id !== id);

//   // use this.setState to update this.state.fighters and rerender the cards
//   this.setState({
//     fighters: newfighters
//   })
// }
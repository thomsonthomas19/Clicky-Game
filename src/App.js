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
    msg: "Choose your fighters!",
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
    let shuffledFighters = this.shuffleArray(fighters);
    this.setState({ fighters: shuffledFighters });
  };
  
  raiseScore = () => {
    const newScore = this.state.curScore + 1;
    this.setState({
      curScore: newScore,
      msg: ""
    });
    this.setState({ msg: "Good One!" });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    this.shuffleFighters();
  };
  
  clickEvent = id => {
    var guessedCorrectly = null;
    // console.log(this.state.fighters);
    const updatedFighters = this.state.fighters.map(fighter => {
      console.log(guessedCorrectly);
      if (fighter.id === id && !fighter.clicked) {
          fighter.clicked = true;
          guessedCorrectly = true;
        } else {
          // guessedCorrectly = false;
        }
      return fighter;

    })
    // console.log(updatedFighters);
    // const updatedFighters = this.state.fighters.map(fighter => {
    //   if (fighter.id == id) {
    //     if (!fighter.clicked) {
    //       fighter.clicked = true;
    //       guessedCorrectly = true;
    //     }
    //   }
    // })
    console.log(guessedCorrectly, "final guess");
    (guessedCorrectly) ?
    this.raiseScore(updatedFighters) :
    this.resetBoard(updatedFighters)
    // if (this.state.clicked.indexOf(id) === -1) {
    //   this.raiseScore();
    //   this.setState({ clicked: this.state.clicked.concat(id) });
    // } else {
    //   this.resetBoard();
    // }
  };
  
  resetBoard = (fighterList) => {
    const resetFighterList = fighterList.map(fighter => {
      fighter.clicked = false;
      return fighter;
    })
    this.setState({
      curScore: 0,
      highScore: this.state.highScore,
      msg: "Better luck next time",
      clicked: []
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.shuffleFighters();
  };
  
  
  render() {
    return (
      <div>
      <ScoreCard
      title="Smash Fighters Click Game"
      curScore={this.state.curScore}
      highScore={this.state.highScore}
      msg={this.state.msg}
      />
      <Wrapper>
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
      </div>
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
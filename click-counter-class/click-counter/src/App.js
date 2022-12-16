import React from 'react';
import './App.css';
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/button.jsx";
import Counter from "./components/counter.jsx";

class App extends React.Component {
  constructor() {
      super();
      this.state  = {
        numClicks: 0
      };
      this.handleClick = this.handleClick.bind(this);
      this.restartCounter = this.restartCounter.bind(this);
  }

  handleClick () {
    this.setState( ({numClicks}) => ({ numClicks: numClicks + 1 }) );
  }

  restartCounter () {
    this.setState( {numClicks: 0} );
  }

  render () {
    return (
      <div className="App">
        <div className="freecodecamp-logo-container">
          <img
            className="freecodecamp-logo"
            src= {freeCodeCampLogo}
            alt= "freeCodeCamp Logo"
            />  
        </div>
        <div className="main-container">
          <Counter 
            numOfClicks={this.state.numClicks}
          />
          <Button 
            text="Click"
            isClickButton={true}
            handleClick={this.handleClick}
          />
          <Button 
            text="Restart"
            isClickButton={false}
            handleClick={this.restartCounter}
          />
        </div>
      </div>
    );
  }
}

export default App;

import './App.css';
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/button.jsx";
import Counter from "./components/counter.jsx";
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

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
          numOfClicks={numClicks}
        />
        <Button 
          text="Click"
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button 
          text="Restart"
          isClickButton={false}
          handleClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;

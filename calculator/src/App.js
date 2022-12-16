import './App.css';
import FreeCodeCamp from './components/freeCodeCamp-logo.jsx';
import Button from './components/button.jsx';
import Display from './components/display.jsx';
import Clear from './components/button-clear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const getResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else {
      alert("Please type in some values first.");
    }
  };

  return (
    <div className='App'>
     <div className='freecodecamp-logo-container'>
        <FreeCodeCamp />
      </div>
      <div className='calculator-container'>
        <Display 
          input={input}
        />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={getResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>

        {/* Clear Button Row */}
        <div className='row'>
          <Clear handleClear={ () => setInput('') }>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Logo from './images/freecodecamp-logo.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          src={ Logo }
          alt = "freeCodeCamp Logo"
        />
      </div>
      <div className='task-main-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

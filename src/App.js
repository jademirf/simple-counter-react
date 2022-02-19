import { useState } from 'react';
import './App.css';
import Button from './compontents/Button';

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple react Counter App</h1>
      </header>
      <main>
        <Button id="increment-btn" onClick={increment}>+1</Button>
        <Button id="decrement-btn" onClick={decrement}>-1</Button>
        <div id="counter-value">{counter}</div>
      </main>
    </div>
  );
}

export default App;

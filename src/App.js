import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple react Counter App</h1>
      </header>
      <main>
        <button id="increment-btn" onClick={() => setCounter(counter + 1)}>+1</button>
        <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>-1</button>
        <div id="counter-value">{counter}</div>
      </main>
    </div>
  );
}

export default App;

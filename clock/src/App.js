import './App.css';
import Clock from './components/Clock';
import React, { useState } from 'react';

function App() {
  const [showClock, setShowClock] = useState(true);
  const handleToggleClock = () => {
    setShowClock(!showClock);
  }
  return (
    <div className="App">
      {showClock && <Clock />}
      <button onClick={handleToggleClock}>Toggle clock</button>
    </div>
  );
}

export default App;

import React from 'react';
import harold from './harold.jpeg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={harold} className="App-logo" alt="logo" />
        <p>Nice Gadgets</p>
        <p>Do not be like Harold but be like a Harold&apos;s Team!</p>
      </header>
    </div>
  );
}

export default App;

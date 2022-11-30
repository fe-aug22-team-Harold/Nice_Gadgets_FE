import React from 'react';
import harold from './harold.jpeg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <img src={harold} className="App-logo" alt="logo" />
        <p>Nice Gadgets</p>
        <p>Do not be like Harold but be like a Harold&apos;s Team!</p>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

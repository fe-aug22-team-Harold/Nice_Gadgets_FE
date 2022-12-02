/* eslint-disable */
import React from 'react';
import harold from './harold.jpeg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
/* eslint-disable */
function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <img src={harold} className="App-logo" alt="logo" />
        <p>Nice Gadgets</p>
        <p>Do not be like Harold but be like a Harold&apos;s Team!</p>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

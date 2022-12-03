import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { FavoritesPage } from './components/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="*" element={<PageNotFound />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

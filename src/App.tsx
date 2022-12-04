import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { Cart } from './components/Cart';
import { FavoritesPage } from './components/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

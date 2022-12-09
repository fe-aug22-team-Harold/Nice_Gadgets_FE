import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { OnePhonePage } from './components/OnePhonePage';
import { Cart } from './components/Cart';
import { FavoritesPage } from './components/FavoritesPage';
import { TabletsPage } from './components/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { RegisterForm } from './components/RegisterForm';
import { LogInForm } from './components/LogInForm';
import { AboutProject } from './components/NavBarFooter/AboutProject';
import { Rights } from './components/NavBarFooter/Rights';
import { ActivationPage } from './components/ActivationPage';
import { UserPage } from './components/UserPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones">
          <Route index element={<PhonesPage />} />

          <Route path=":phoneSlug" element={<OnePhonePage />} />
        </Route>

        <Route path="/tablets" element={<TabletsPage />} />

        <Route path="/accessories" element={<AccessoriesPage />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/sing-up" element={<RegisterForm />} />

        <Route path="/login" element={<LogInForm />} />

        <Route path="/about-project" element={<AboutProject />} />

        <Route path="/rights" element={<Rights />} />

        <Route path="/activate/:token" element={<ActivationPage />} />

        <Route path="/user" element={<UserPage />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';

export const LogInForm: React.FC = () => {
  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock firstRoute={'LogIn'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Log In</div>
          </div>
        </div>
        <form className="register-page__form--login form">
          <input type="email"
          placeholder="Enter Email"
          className="form__field"
          required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="form__field"
            required
          />
          <button className="form__button">Log In</button>
        </form>
        <div className="register-page__text text">
          Not registered yet?
          <Link to="/register" className="text__link">
            &nbsp; Sign Up!
          </Link>
        </div>
      </div>
    </div>
  );
};

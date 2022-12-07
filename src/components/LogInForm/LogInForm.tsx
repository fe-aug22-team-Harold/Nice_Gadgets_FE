import React from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';

export const LogInForm: React.FC = () => {
  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__grid">
        <div className="favorites-page__history">
          <HistoryBlock
            firstRoute={'Register'}
            secondRoute={undefined}
          />
        </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Register</div>
          </div>
          </div>
        <form className="register-page__form form">
          <input
            type="text"
            placeholder='Username'
            className='form__field'
          />
          <input
            type="email"
            placeholder="Email"
            className='form__field'
          />
          <input
            type="password"
            placeholder='Password'
            className='form__field'
          />
          <input
            type="password"
            placeholder='Confirm Password'
            className='form__field'
          />
        <button
          className='form__button'>
            Register
        </button>
        </form>
        <div className='register-page__text text'>
          Already registered?
          <Link to="/log-in" className="text__link">Log in!</Link>
        </div>
      </div>
    </div>
  );
};

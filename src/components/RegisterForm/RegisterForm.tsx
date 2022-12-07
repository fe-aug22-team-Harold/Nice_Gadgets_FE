import React from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';

export const RegisterForm: React.FC = () => {
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
            placeholder='Enter Username'
            className='form__field'
          />
          <input
            type="email"
            placeholder="Enter Email"
            className='form__field'
          />
          <input
            type="password"
            placeholder='Enter Password'
            className='form__field'
          />
          <input
            type="password"
            placeholder='Repeat Password'
            className='form__field'
          />
        <button
          className='form__button'>
            Register
        </button>
        </form>
        <div className='register-page__text text'>
          Already registered?
          <Link to="/login" className="text__link">&nbsp; Log in!</Link>
        </div>
      </div>
    </div>
  );
};

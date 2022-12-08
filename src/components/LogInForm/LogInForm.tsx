/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';
import { validateEmail } from '../RegisterForm';

export const LogInForm: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');
  const [passwordQuery, setPasswordQuery] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const validPassword = passwordQuery.trim().length > 6;
  const validEmailAndFocus = () => !validateEmail(emailQuery) && emailError;
  const validPasswordAndFocus = !validPassword && passwordError;

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
        <form className="register-page__form form">
          <div className="form__block">
            <input
              type="email"
              placeholder="Enter Email"
              className="form__field"
              value={emailQuery}
              onChange={(event) => setEmailQuery(event.target.value)}
              onBlur={() => {
                if (!validateEmail(emailQuery)) {
                  setEmailError(true);
                }
              }}
              required
            />
            {validEmailAndFocus() && (
              <span className="form__error">Incorrect Email</span>
            )}
          </div>
          <div className="form__block">
            <input
              type="password"
              placeholder="Enter Password"
              className="form__field"
              value={passwordQuery}
              onChange={(event) => setPasswordQuery(event.target.value)}
              onBlur={() => {
                if (!validPassword) {
                  setPasswordError(true);
                }
              }}
            />
            {validPasswordAndFocus && (
              <span className="form__error">
                Password must be at least 6 characters
              </span>
            )}
          </div>
          <button className="form__button">Log In</button>
        </form>
        <div className="register-page__text text">
          Not registered yet?
          <Link to="/register" className="text__link">
            &nbsp; Sign up!
          </Link>
        </div>
      </div>
    </div>
  );
};

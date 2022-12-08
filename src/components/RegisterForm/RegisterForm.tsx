/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      // eslint-disable-next-line max-len, comma-dangle
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const RegisterForm: React.FC = () => {
  const [usernameQuery, setUsernameQuery] = useState('');
  const [emailQuery, setEmailQuery] = useState('');
  const [passwordQuery, setPasswordQuery] = useState('');
  const [confirmPasswordQuery, setConfirmPasswordQuery] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const validUsername = usernameQuery.trim().length > 4;
  const validPassword = passwordQuery.trim().length > 6;
  const validConfirmPassoword = passwordQuery === confirmPasswordQuery;
  const validUsernameAndFocus = !validUsername && usernameError;
  const validEmailAndFocus = () =>
    !validateEmail(emailQuery) && emailError;
  const validPasswordAndFocus = !validPassword && passwordError;
  const validConfirmPassowordAndFocus
  = !validConfirmPassoword && confirmPasswordError;

  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock firstRoute={'Register'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Register</div>
          </div>
        </div>
        <form className="register-page__form form">
          <div className="form__block">
            <input
              type="text"
              placeholder="Enter Username"
              className="form__field"
              value={usernameQuery}
              onChange={(event) => setUsernameQuery(event.target.value)}
              required
              onBlur={() => {
                if (!validUsername) {
                  setUsernameError(true);
                }
              }}
            />
            {validUsernameAndFocus && (
              <span className="form__error">
                Username must be at least 4 characters
              </span>
            )}
          </div>
          <div className="form__block">
            <input
              type="email"
              placeholder="Enter Email"
              className="form__field"
              value={emailQuery}
              onChange={(event) => setEmailQuery(event.target.value)}
              required
              onBlur={() => {
                if (!validateEmail(emailQuery)) {
                  setEmailError(true);
                }
              }}
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
              required
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
          <div className="form__block">
            <input
              type="password"
              placeholder="Repeat Password"
              className="form__field"
              value={confirmPasswordQuery}
              onChange={(event) => setConfirmPasswordQuery(event.target.value)}
              onBlur={() => {
                if (!validConfirmPassoword) {
                  setConfirmPasswordError(true);
                }
              }}
              required
            />
            {validConfirmPassowordAndFocus && (
              <span className="form__error">Passwords must match</span>
            )}
          </div>
          <button className="form__button">Register</button>
        </form>
        <div className="register-page__text text">
          Already registered?
          <Link to="/logIn" className="text__link">
            &nbsp; Log in!
          </Link>
        </div>
      </div>
    </div>
  );
};

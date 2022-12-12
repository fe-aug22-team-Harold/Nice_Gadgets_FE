/* eslint-disable no-shadow */
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';
import { client } from '../../utils/fetch';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { Modal } from '../Modal';

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

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closeModalHandler = () => setIsSuccess(false);

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError || usernameError || confirmPasswordError) {
      return;
    }

    singUpOnAPI();
  };

  const singUpOnAPI = async() => {
    setIsLoading(true);

    try {
      const data = {
        name: usernameQuery,
        email: emailQuery,
        password: passwordQuery,
      };

      await client.post('/users/singup', data);
      setIsSuccess(true);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock firstRoute={'Register'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Sing Up</div>
          </div>
        </div>
        <form
          className="register-page__form form"
          onSubmit={formSubmit}
        >
          <div className="form__block">
            <input
              type="text"
              placeholder="Enter Username"
              className="form__field"
              value={usernameQuery}
              onChange={(event) => {
                setUsernameError(false);
                setUsernameQuery(event.target.value);
              }}
              required
              onBlur={() => {
                if (usernameQuery.trim().length < 4) {
                  setUsernameError(true);
                }
              }}
            />
            {usernameError && (
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
              onChange={(event) => {
                setEmailError(false);
                setEmailQuery(event.target.value);
              }}
              required
              onBlur={() => {
                if (!validateEmail(emailQuery)) {
                  setEmailError(true);
                }
              }}
            />
            {emailError && (
              <span className="form__error">Incorrect Email</span>
            )}
          </div>
          <div className="form__block">
            <input
              type="password"
              placeholder="Enter Password"
              className="form__field"
              value={passwordQuery}
              onChange={(event) => {
                setPasswordError(false);
                setPasswordQuery(event.target.value);
              }}
              required
              onBlur={() => {
                if (passwordQuery.trim().length < 5) {
                  setPasswordError(true);
                }
              }}
            />
            {passwordError && (
              <span className="form__error">
                Password must be at least 5 characters
              </span>
            )}
          </div>
          <div className="form__block">
            <input
              type="password"
              placeholder="Repeat Password"
              className="form__field"
              value={confirmPasswordQuery}
              onChange={(event) => {
                setConfirmPasswordError(false);
                setConfirmPasswordQuery(event.target.value);
              }}
              onBlur={() => {
                if (confirmPasswordQuery !== passwordQuery) {
                  setConfirmPasswordError(true);
                }
              }}
              required
            />
            {confirmPasswordError && (
              <span className="form__error">Passwords must match</span>
            )}
          </div>

          {isError && <ErrorMessage message={null} />}

          {isSuccess && (
            <Modal
              show={isSuccess}
              onCancel={closeModalHandler}
              header={'Congratulations!'}
              className={'register-page__modal'}
            >
              <div className="register-page__modal-message">
                <p>Your account has been successfully created!</p>
                <p>Please check your email to activate your account now.</p>
              </div>
            </Modal>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="form__button"
          >
            {isLoading ? <Loader /> : 'Sing Up'}
          </button>
        </form>
        <div className="register-page__text text">
          Already registered?
          <Link to="/login" className="text__link">
            &nbsp; Log in!
          </Link>
        </div>
      </div>
    </div>
  );
};

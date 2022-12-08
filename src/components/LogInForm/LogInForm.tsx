/* eslint-disable no-shadow */
import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HistoryBlock } from '../HistoryBlock';
import { validateEmail } from '../RegisterForm';
import { client } from '../../utils/fetch';
import { User } from '../../types/User';
import { Loader } from '../Loader';
import { useAppDispatch, useLocalStorage } from '../../app/hooks';
import { ErrorMessage } from '../ErrorMessage';
import { setUser } from '../../features/userSlice';

export const LogInForm: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');
  const [passwordQuery, setPasswordQuery] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  const [, setUserStored] = useLocalStorage('user');

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    loginToAPI();
  };

  const loginToAPI = async() => {
    setIsLoading(true);

    try {
      const data = {
        email: emailQuery,
        password: passwordQuery,
      };

      const response = await client.post<User>('/users/login', data);

      if ('error' in response) {
        setIsError(true);
        setErrorMessage(response['error'] as string);
        setIsLoading(false);

        return;
      }

      setUserStored(response);
      dispatch(setUser(response));
      routeChange();
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
            <HistoryBlock firstRoute={'LogIn'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Log In</div>
          </div>
        </div>
        <form
          className="register-page__form form"
          onSubmit={formSubmit}
        >
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
              onBlur={() => {
                if (!validateEmail(emailQuery)) {
                  setEmailError(true);
                }
              }}
              required
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

          {isError && (
            <ErrorMessage message={errorMessage} />
          )}

          <button
            type="submit"
            className="form__button"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : 'Log In'}
          </button>
        </form>
        <div className="register-page__text text">
          Not registered yet?
          <Link to="/sing-up" className="text__link">
            &nbsp; Sign up!
          </Link>
        </div>
      </div>
    </div>
  );
};

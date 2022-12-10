import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { client } from '../../utils/fetch';
import { LoaderBox } from '../LoaderBox';
import { ErrorMessage } from '../ErrorMessage';
import { HistoryBlock } from '../HistoryBlock';
import { User } from '../../types/User';

export const ActivationPage: React.FC = () => {
  const { token } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activateByToken = async() => {
    setIsLoading(true);

    let response;

    try {
      response = await client.get<User>('/users/activate/' + token);

      if ('error' in response) {
        setIsError(true);
      }

      setIsSuccess(true);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);

    return response;
  };

  useEffect(() => {
    activateByToken();
  }, []);

  return (
    <div
    className="activation-page"
    >
      <div className="activation-page__container">
        <div className="activation-page__history">
          <HistoryBlock firstRoute={'Activation'} secondRoute={undefined} />
        </div>
        <h1 className="OnePhonePage__title">Activation page</h1>
        {isLoading && (
          <div className='activation-page__text'>
            Wait we are doing everything to activate your account!
            <div className="activation-page__loader">
              <LoaderBox />
            </div>
          </div>
        )}

        {isError && (
          <ErrorMessage message={'Error during activation your account :('} />

        )}

        {(isSuccess && !isError) && (
          <div className='activation-page__text'>
            Congratulations! Your account successfully activated!
            <br />
            Now please <Link
            className='activation-page__text activation-page__text--link'
            to="/login">Log In</Link> to your account.
          </div>
        )}
      </div>
    </div>
  );
};

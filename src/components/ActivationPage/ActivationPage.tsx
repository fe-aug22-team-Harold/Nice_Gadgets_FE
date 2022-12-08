import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../utils/fetch';
import { LoaderBox } from '../LoaderBox';
import { ErrorMessage } from '../ErrorMessage';

export const ActivationPage: React.FC = () => {
  const { token } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activateByToken = async() => {
    setIsLoading(true);

    try {
      await client.get('/users/activate/' + token);

      setIsSuccess(true);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    activateByToken();
  }, []);

  return (
    <div style={{ minHeight: '80vh', color: 'white' }} className="home-page">
      <div className="home-page__container">
        <h1 className="OnePhonePage__title">Activation page</h1>
        {isLoading && (
          <div>
            Wait we are doing everything to activate your account!
            <LoaderBox />
          </div>
        )}

        {isError && (
          <ErrorMessage message={'Error during activation your account :('} />
        )}

        {isSuccess && (
          <div>
            Congratulations! Your account successfully activated!)
            <br />
            Now please LogIn to your account!
          </div>
        )}
      </div>
    </div>
  );
};

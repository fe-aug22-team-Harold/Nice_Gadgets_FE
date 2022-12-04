import React, { useEffect, useState } from 'react';
import { AboutPhone } from './AboutPhone';
import { TechSpecs } from './TechSpecs';
import './OnePhonePage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { client } from '../../utils/fetch';
import { Loader } from '../Loader';
import { PhoneImageSlider } from '../PhoneImageSlider';

export const OnePhonePage: React.FC = () => {
  const { phoneSlug } = useParams();
  const [currentItem, setCurrentItem] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/nope');
  };

  useEffect(() => {
    const getItemFromAPI = async() => {
      setIsLoading(true);

      try {
        const response = await client.get<Phone>('/products/one/' + phoneSlug);

        if ('error' in response) {
          routeChange();

          return;
        }

        setCurrentItem(response);
      } catch (e) {
        routeChange();
      }

      setIsLoading(false);
    };

    getItemFromAPI();
  }, []);

  return (
    <div className="OnePhonePage">
      <div className="OnePhonePage__container">
        {isLoading && <Loader />}

        {currentItem && !isLoading && (
          <>
            <PhoneImageSlider imgPath={currentItem.image} />
            {/* Add your last component and pass 'currentItem' there :) */}
            <AboutPhone />
            <TechSpecs phoneInfo={currentItem}/>
          </>
        )}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { AboutPhone } from './AboutPhone';
import { TechSpecs } from './TechSpecs';
import './OnePhonePage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { client } from '../../utils/fetch';
import { Loader } from '../Loader';
import { PhoneImageSlider } from '../PhoneImageSlider';
import { CardsSlider } from '../CardsSlider';
import { PhoneImageInfo } from '../PhoneImageInfo';
import { HistoryBlock } from '../HistoryBlock';

const allPhones = [
  {
    'id': '1',
    'category': 'phones',
    'phoneId': 'apple-iphone-7-32gb-black',
    'itemId': 'apple-iphone-7-32gb-black',
    'name': 'Apple iPhone 7 32GB Black',
    'fullPrice': 400,
    'price': 375,
    'screen': "4.7' IPS",
    'capacity': '32GB',
    'color': 'black',
    'ram': '2GB',
    'year': 2016,
    'image': 'img/phones/apple-iphone-7/black/00.jpg',
  },
  {
    'id': '2',
    'category': 'phones',
    'phoneId': 'apple-iphone-7-plus-32gb-black',
    'itemId': 'apple-iphone-7-plus-32gb-black',
    'name': 'Apple iPhone 7 Plus 32GB Black',
    'fullPrice': 540,
    'price': 500,
    'screen': "4.7' IPS",
    'capacity': '32GB',
    'color': 'black',
    'ram': '3GB',
    'year': 2016,
    'image': 'img/phones/apple-iphone-7-plus/black/00.jpg',
  },
  {
    'id': '3',
    'category': 'phones',
    'phoneId': 'apple-iphone-8-64gb-gold',
    'itemId': 'apple-iphone-8-64gb-gold',
    'name': 'Apple iPhone 8 64GB Gold',
    'fullPrice': 600,
    'price': 550,
    'screen': "4.7' IPS",
    'capacity': '64GB',
    'color': 'gold',
    'ram': '2GB',
    'year': 2017,
    'image': 'img/phones/apple-iphone-8/gold/00.jpg',
  },
  {
    'id': '4',
    'category': 'phones',
    'phoneId': 'apple-iphone-11-64gb-black',
    'itemId': 'apple-iphone-11-64gb-black',
    'name': 'Apple iPhone 11 64GB Black',
    'fullPrice': 932,
    'price': 880,
    'screen': "4.7' IPS",
    'capacity': '64GB',
    'color': 'black',
    'ram': '4GB',
    'year': 2019,
    'image': 'img/phones/apple-iphone-11/black/00.jpg',
  },
];

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
    <div className='OnePhonePage'>
      <div className='OnePhonePage__container'>
        {isLoading && (
          <div className="OnePhonePage__loader">
            <Loader />
          </div>
        )}

        {currentItem && !isLoading && (
          <>
            <div className='OnePhonePage page__section page__section--3'>
              <div className="OnePhonePage__history">
                <HistoryBlock
                  firstRoute={'Phones'}
                  secondRoute={currentItem.name}
                />
              </div>
              <h1 className='OnePhonePage__title'>{currentItem.name}</h1>
              <div className='
                OnePhonePage__phone-choose
                OnePhonePage__phone-choose__container
                '
              >
                <div className='OnePhonePage__phone-choose__slider'>
                  <PhoneImageSlider imgPath={currentItem.image} />
                </div>

                <div className='OnePhonePage__phone-choose__info'>
                  <PhoneImageInfo phoneCard={currentItem} />
                </div>
              </div>

              <div className='
                OnePhonePage__phone-description
                OnePhonePage__phone-description__container
                '
              >
                <div className='OnePhonePage__phone-description__about'>
                  <AboutPhone />
                </div>

                <div className='OnePhonePage__phone-description__specs'>
                  <TechSpecs phoneInfo={currentItem}/>
                </div>
              </div>
            </div>

            <div className='
              OnePhonePage__phone-slider
              OnePhonePage__phone-slider__container
              '
            >
              <CardsSlider
                allPhones={allPhones}
                title='You may also like'
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

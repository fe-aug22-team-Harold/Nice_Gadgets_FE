import React, { useEffect, useState } from 'react';
import { AboutPhone } from './AboutPhone';
import { TechSpecs } from './TechSpecs';
import './OnePhonePage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { client } from '../../utils/fetch';
import { PhoneImageSlider } from '../PhoneImageSlider';
import { CardsSlider } from '../CardsSlider';
import { PhoneImageInfo } from '../PhoneImageInfo';
import { HistoryBlock } from '../HistoryBlock';
import { LoaderBox } from '../LoaderBox';
import { Loader } from '../Loader';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';

export const OnePhonePage: React.FC = () => {
  const { phoneSlug } = useParams();
  const [currentItem, setCurrentItem] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [samePhonesLoading, setSamePhonesLoading] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const [memory, setMemory] = useState<string[]>([]);

  const { allPhones } = useAppSelector(state => state.phones);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/nope');
  };

  const getItemFromAPI = async() => {
    setIsLoading(true);
    setSamePhonesLoading(true);

    try {
      const response = await client.get<Phone>('/products/one/' + phoneSlug);

      if ('error' in response) {
        routeChange();

        return;
      }

      const currentModel = response.image.split('/')[2];
      const samePhones = await client
        .get<Phone[]>('/products/same/' + currentModel);
      const colorsUniq = new Set(samePhones.map(item => item.color));
      const memoryUniq = new Set(samePhones.map(item => item.capacity));

      if (!allPhones) {
        await dispatch(getPhonesAsync());
      }

      setColors(Array.from(colorsUniq));
      setMemory(Array.from(memoryUniq));
      setCurrentItem(response);
    } catch (e) {
      routeChange();
    }

    setSamePhonesLoading(false);
    setIsLoading(false);
  };

  useEffect(() => {
    getItemFromAPI();
  }, []);

  useEffect(() => {
    getItemFromAPI();
  }, [phoneSlug]);

  return (
    <div className='OnePhonePage'>
      <div className='OnePhonePage__container'>
        {isLoading && (
          <div className="OnePhonePage__loader">
            <LoaderBox />
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
                  <>
                    {samePhonesLoading
                      ? <Loader />
                      : <PhoneImageInfo
                          colors={colors}
                          memory={memory}
                          phoneCard={currentItem}
                          currentColor={currentItem.color}
                          currentMemory={currentItem.capacity}
                      />
                    }
                  </>
                </div>
              </div>

              <div className='
                OnePhonePage__phone-description
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
              {allPhones && (
                <CardsSlider
                  allPhones={allPhones.slice(46, 50)}
                  title='You may also like'
                />
              ) }
            </div>
          </>
        )}
      </div>
    </div>
  );
};

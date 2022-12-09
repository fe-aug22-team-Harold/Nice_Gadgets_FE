import React, { useState } from 'react';
import {
  // eslint-disable-next-line no-shadow
  CarouselProvider, Image,
  Slide, Slider, Dot,
} from 'pure-react-carousel';
import './PhoneImageSlider.scss';
import appleLogo from '../../images/640px-Apple-logo.png';
import 'pure-react-carousel/dist/react-carousel.es.css';

// eslint-disable-next-line max-len
const staticBasePath = 'https://raw.githubusercontent.com/fe-aug22-team-Harold/nice_gadgets_static-files/master/';

type Props = {
  imgPath: string,
}

export const PhoneImageSlider: React.FC<Props> = ({ imgPath }) => {
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const totalSlides = error2 ? error1 ? 3 : 4 : 5;
  const currentImgPath = imgPath.split('/').slice(0, -1).join('/');

  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={totalSlides}
      step={1}
      naturalSlideWidth={40}
      naturalSlideHeight={40}
      hasMasterSpinner
      lockOnWindowScroll
      className="phone-picture"
    >
      {/* This group of elements are previews of images */}
      <div className="phone-picture__dots">
        <Dot className="phone-picture__dot" slide={0} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/00.png'}
            alt={appleLogo}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={1} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/01.png'}
            alt={appleLogo}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={2} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/02.png'}
            alt={appleLogo}
          />
        </Dot>

        {!error1 && (
          <Dot className="phone-picture__dot" slide={3} >
            <img
              className="phone-picture__item"
              src={staticBasePath + currentImgPath + '/03.png'}
              alt={appleLogo}
              onError={() => {
                setError1(true);
              }}
            />
          </Dot>
        )}

        {!error2 && (
          <Dot className="phone-picture__dot" slide={4} >
            <img
              className="phone-picture__item"
              src={staticBasePath + currentImgPath + '/04.png'}
              alt={appleLogo}
              onError={() => {
                setError2(true);
              }}
            />
          </Dot>
        )}
      </div>

      {/* This group of elements are main images witch slides one by one */}
      <Slider className="phone-picture__main">
        <Slide index={0}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/00.png'}
            alt={appleLogo}
          />
        </Slide>

        <Slide index={1}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/01.png'}
            alt={appleLogo}
          />
        </Slide>

        <Slide index={2}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/02.png'}
            alt={appleLogo}
          />
        </Slide>

        {!error1 && (
          <Slide index={3}>
            <Image
              className="phone-picture__img"
              hasMasterSpinner
              src={staticBasePath + currentImgPath + '/03.png'}
              alt={appleLogo}
            />
          </Slide>
        )}

        {!error2 && (
          <Slide index={4}>
            <Image
              className="phone-picture__img"
              hasMasterSpinner
              src={staticBasePath + currentImgPath + '/04.png'}
              alt={appleLogo}
            />
          </Slide>
        )}
      </Slider>
    </CarouselProvider>
  );
};

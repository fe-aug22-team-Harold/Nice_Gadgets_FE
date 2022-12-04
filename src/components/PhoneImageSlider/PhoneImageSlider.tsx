import React from 'react';
import {
  // eslint-disable-next-line no-shadow
  CarouselProvider, Image,
  Slide, Slider, Dot,
} from 'pure-react-carousel';
import './PhoneImageSlider.scss';

// its a default styles of slider components,
// it could be useful or could be a problem...
import 'pure-react-carousel/dist/react-carousel.es.css';

// eslint-disable-next-line max-len
const staticBasePath = 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/';

type Props = {
  imgPath: string,
}

export const PhoneImageSlider: React.FC<Props> = ({ imgPath }) => {
  const currentImgPath = imgPath.split('/').slice(0, -1).join('/');

  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={5}
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
            src={staticBasePath + currentImgPath + '/00.jpg'}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={1} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/01.jpg'}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={2} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/02.jpg'}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={3} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/03.jpg'}
          />
        </Dot>

        <Dot className="phone-picture__dot" slide={4} >
          <img
            className="phone-picture__item"
            src={staticBasePath + currentImgPath + '/04.jpg'}
          />
        </Dot>
      </div>

      {/* This group of elements are main images witch slides one by one */}
      <Slider className="phone-picture__main">
        <Slide index={0}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/00.jpg'} />
        </Slide>

        <Slide index={1}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/01.jpg'} />
        </Slide>

        <Slide index={2}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/02.jpg'}
          />
        </Slide>

        <Slide index={3}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/03.jpg'}
          />
        </Slide>

        <Slide index={4}>
          <Image
            className="phone-picture__img"
            hasMasterSpinner
            src={staticBasePath + currentImgPath + '/04.jpg'}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

import React from 'react';
import {
  CarouselProvider, Slider, ButtonBack,
  ButtonNext, Slide, DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const WelcomeBanner: React.FC = () => {
  return (
    <section className="page__section page__section--1 welcome">
      <div className="grid grid--desktop">
        <div
          className="grid__item
            grid__item--desktop-1-18
            grid__item--tablet-1-9"
        >
          <div className="welcome__title">Welcome to Nice Gadgets store!</div>
        </div>
      </div>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
        className="grid grid--desktop"
        isPlaying
        interval={5000}
      >
        <ButtonBack className="grid__item
          grid__item--desktop-1-1
          grid__item--tablet-1-1
          welcome__sidebar">
          <div className="icon-arrow icon-arrow--left"></div>
        </ButtonBack>
        <Slider className="grid__item
            grid__item--desktop-2-23
            grid__item--tablet-2-11"
        >
          <Slide index={0}>
            <div className="welcome__now-available"></div>
          </Slide>
          <Slide index={1}>
            <div
              className="welcome__now-available welcome__now-available--2">
            </div>
          </Slide>
          <Slide index={2}>
            <div
              className="welcome__now-available welcome__now-available--3">
            </div>
          </Slide>
        </Slider>
        <ButtonNext className="grid__item
          grid__item--desktop-24-24
          grid__item--tablet-12-12
          welcome__sidebar">
          <div className="icon-arrow"></div>
        </ButtonNext>
        <DotGroup className="welcome__slider
          slider
          grid__item
          grid__item--desktop-11-12
          grid__item--tablet-6-7"
        />
      </CarouselProvider>
    </section>
  );
};

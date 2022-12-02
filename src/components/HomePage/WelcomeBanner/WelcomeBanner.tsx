import React from 'react';

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
        <div
          className="grid__item
            grid__item--desktop-1-1
            grid__item--tablet-1-1"
        >
          <a className="welcome__sidebar">
            <div className="icon-arrow icon-arrow--left"></div>
          </a>
        </div>
        <div
          className="grid__item
            grid__item--desktop-2-23
            grid__item--tablet-2-11"
        >
          <div className="welcome__now-available"></div>
        </div>
        <div
          className="
            grid__item
            grid__item--desktop-24-24
            grid__item--tablet-12-12
            "
        >
          <a className="welcome__sidebar">
            <div className="icon-arrow"></div>
          </a>
        </div>
      </div>
      <div className="welcome__slider slider">
        <div className="slider__blocks"></div>
        <div className="slider__blocks"></div>
        <div className="slider__blocks"></div>
      </div>
    </section>
  );
};

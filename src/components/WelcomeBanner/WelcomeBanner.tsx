import React from 'react';

export const WelcomeBanner: React.FC = () => {
  return (
    <section className="page__section page__section--1 welcome">
      <div className="grid grid--desktop">
        <div
          className="grid__item
            grid__item--desktop-1-17
            grid__item--tablet-1-9"
        >
          <div className="welcome__title">Welcome to Nice Gadgets store!</div>
        </div>
        <div
          className="grid__item
            grid__item--desktop-1-1
            grid__item--tablet-1-1"
        >
          <div className="welcome__left-sidebar"></div>
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
          <div className="welcome__right-sidebar"></div>
        </div>
      </div>
    </section>
  );
};

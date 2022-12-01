import React from 'react';
import { WelcomeBanner } from '../WelcomeBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <WelcomeBanner />
        <div className="page_section brand-new-models">
          <div className="brand-new-models__title"></div>
          <div className="brand-new-models__block block">
            <div className="grid">
              <div
                className="
            grid__item
            grid__item--desktop-1-6
            grid__item--tablet-1-5
            grid__item--mobile-1-3"
              >
                <div className="block__phone"></div>
              </div>
              <div
                className="
              grid__item
              grid__item--desktop-7-12
              grid__item--tablet-6-10
              grid__item--mobile-4-4"
              >
                <div className="block__phone"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

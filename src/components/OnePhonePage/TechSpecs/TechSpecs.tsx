/* eslint-disable no-shadow */
import React from 'react';
import { Phone } from '../../../types/Phone';
import './TechSpecs.scss';

type Props = {
  phoneInfo: Phone,
}

export const TechSpecs: React.FC<Props> = ({ phoneInfo }) => {
  const {
    screen,
    capacity,
    ram,
  } = phoneInfo;

  return (
    <div className="TechSpecs">
      <h2 className='TechSpecs__title'>
        Tech specs
      </h2>

      <div className="TechSpects__section section">
        <p className='section__textChar section__textChar--first'>Screen</p>
        <p className='section__textValue section__textValue--first'>
          {screen}
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Resolution</p>
        <p className='section__textValue section__textValue'>
          2688x1242
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Processor</p>
        <p className='section__textValue section__textValue'>
          Apple A12 Bionic
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>RAM</p>
        <p className='section__textValue section__textValue'>
          {ram}
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Built in memory</p>
        <p className='section__textValue section__textValue'>
          {capacity}
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Camera</p>
        <p className='section__textValue section__textValue'>
          12 Mp + 12 Mp + 12 Mp (Triple)
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Zoom</p>
        <p className='section__textValue section__textValue'>
          Optical, 2x
        </p>
      </div>

      <div className="TechSpects__section section">
        <p className='section__textChar'>Cell</p>
        <p className='section__textValue section__textValue'>
          GSM, LTE, UMTS
        </p>
      </div>
    </div>
  );
};

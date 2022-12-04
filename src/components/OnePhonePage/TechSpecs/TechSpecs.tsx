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

      <div className="TechSpects__sect sect">
        <p className='sect__textChar sect__textChar--first'>Screen</p>
        <p className='sect__textValue sect__textValue--first'>
          {screen}
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Resolution</p>
        <p className='sect__textValue sect__textValue'>
          2688x1242
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Processor</p>
        <p className='sect__textValue sect__textValue'>
          Apple A12 Bionic
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>RAM</p>
        <p className='sect__textValue sect__textValue'>
          {ram}
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Built in memory</p>
        <p className='sect__textValue sect__textValue'>
          {capacity}
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Camera</p>
        <p className='sect__textValue sect__textValue'>
          12 Mp + 12 Mp + 12 Mp (Triple)
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Zoom</p>
        <p className='sect__textValue sect__textValue'>
          Optical, 2x
        </p>
      </div>

      <div className="TechSpects__sect sect">
        <p className='sect__textChar'>Cell</p>
        <p className='sect__textValue sect__textValue'>
          GSM, LTE, UMTS
        </p>
      </div>
    </div>
  );
};

import React from 'react';

export const Buttons: React.FC = () => {
  return (
    <div className="buttons">
      <button className="buttons__button buttons__button--arrow">
        <div className="icon-arrow icon-arrow--left"></div>
      </button>
      <button className="buttons__button">
        <div className="buttons__text">1</div>
      </button>
      <button className="buttons__button">
        <div className="buttons__text">2</div>
      </button>
      <button className="buttons__button">
        <div className="buttons__text">3</div>
      </button>
      <button className="buttons__button">
        <div className="buttons__text">4</div>
      </button>
      <button className="buttons__button buttons__button--arrow">
        <div className="icon-arrow"></div>
      </button>
    </div>
  );
};

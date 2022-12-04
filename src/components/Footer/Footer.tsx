import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarFooter } from '../NavBarFooter';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo logo--footer" />
      <NavBarFooter />
      <div onClick={() => window.scrollTo(0, 0)} className="back-to-top">
        <p className="back-to-top__p">Back to top</p>
        <span className="back-to-top__slider"></span>
      </div>
    </div>
  );
};

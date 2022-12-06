import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarFooter.scss';

export const NavBarFooter: React.FC = () => {
  return (
    <div className="nav nav--footer">
      <div className="nav__bar nav__bar--footer">
        <a
          href="https://github.com/fe-aug22-team-Harold"
          target="_blank"
          rel="noreferrer"
          className="nav__link nav__link--footer"
        >
          Github
        </a>
        <Link to="/about-project" className="nav__link nav__link--footer">
          About
        </Link>
        <Link to="/rights" className="nav__link nav__link--footer">
          Rights
        </Link>
      </div>
    </div>
  );
};

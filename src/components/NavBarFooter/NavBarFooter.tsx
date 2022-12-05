import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AboutProject } from './AboutProject';
import './NavBarFooter.scss';

export const NavBarFooter: React.FC = () => {
  return (
    <div className="nav nav--footer">
      <div className="nav__bar nav__bar--footer">
        <Link to="/github" className="nav__link nav__link--footer">
          Github
        </Link>
        <Link to="/contacts" className="nav__link nav__link--footer">
          <Route path="/about-project" element={<AboutProject />} />
        </Link>
        <Link to="/rights" className="nav__link nav__link--footer">
          Rights
        </Link>
      </div>
    </div>
  );
};

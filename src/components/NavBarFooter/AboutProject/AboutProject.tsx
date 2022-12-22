import React from 'react';
import './AboutProject.scss';
import { HistoryBlock } from '../../HistoryBlock';

// eslint-disable-next-line no-undef
export const AboutProject: React.FC = () => {
  return (
    <div className='page__section page__section--2 AboutProject'>
      <div className="Rights__history">
        <HistoryBlock
          firstRoute='About project'
        />
      </div>

      <h1 className='AboutProject__title'>
        About
      </h1>

      <h3 className='AboutProject__subtitle'>
        About project
      </h3>

      <p className='AboutProject__text'>
        Welcome to the Nice Gadgets.
        <br />
        Nice Gadgets is E-Commerce Web Application
        for buying phones, tablets etc.
        <br />
        The project was developed by a team of developers
        using the front-end React library.
        <br />
        As well as technologies such as React-Router, Redux(Redux-Toolkit),
        TypeScript, LocalStorage, Fetch, HTML5, CSS3(SASS) etc.
        <br />
        The backend part of the application is built with Node.JS (Express).
        <br />
        The client part uses a component approach to development,
         as well as strong typing using TypeScript.
        <br />
        The server part is built according to the MVC pattern
        and works according to the principles of the REST API.

      </p>

      <h3 className='AboutProject__subtitle'>
        Harold&apos;s Team
      </h3>

      <p className='AboutProject__text'>
        - Max Bovtun - maxbovtun@gmail.com (team-lead)
        <br />
        - Anton Iskryk - iskryk.anton@gmail.com
        <br />
        - Nikita Ovchinnikov - frederiquezn@gmail.com
        <br />
        - Iryna Borniak - irynaborniak@gmail.com
        <br />
        - Andrii Zhabynets - a.zhabynets03@gmail.com
      </p>

      <h3 className='AboutProject__subtitle'>
        Application parts
      </h3>

      <p className='AboutProject__text'>
        <a
          style={{ textDecoration: 'none', color: 'yellow' }}
          href="https://fe-aug22-team-harold.github.io/nice_gadgets_FE"
        >
          👉DEPLOYED APPLICATION
        </a>
        <br />
        <a
          style={{ textDecoration: 'none', color: 'yellow' }}
          href="https://github.com/fe-aug22-team-Harold/nice_gadgets_FE"
        >
          👉Frontend Part
        </a>
        <br />
        <a
          style={{ textDecoration: 'none', color: 'yellow' }}
          href="https://github.com/MaxManis/nice_gadgets_backend-restful-api"
        >
          👉Backend Part
        </a>
        <br />
        <a
          style={{ textDecoration: 'none', color: 'yellow' }}
          href="https://github.com/fe-aug22-team-Harold"
        >
          👉Harold&apos;s Team GitHub
        </a>
      </p>

      <h3 className='AboutProject__subtitle'>
        Technologies
      </h3>

      <p className='AboutProject__text'>
      <strong style={{ textDecoration: 'underline' }}>Client side:</strong>
        <br />
        React/React-Router/Redux/Redux-Toolkit
        /TypeScript/LocalStorage/Fetch/HTML5/CSS3(SASS)
        <br />
        <strong style={{ textDecoration: 'underline' }}>Server side:</strong>
        <br />
        REST API/NodeJS/Express/CORS/JWT/Bcrypt
        /PostgresSQL(cloud claster)/SequelizeORM/Cookies/Nodemailer
      </p>
    </div>
  );
};

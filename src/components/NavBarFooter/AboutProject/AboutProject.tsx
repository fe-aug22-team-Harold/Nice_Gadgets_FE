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
        About our project
      </h1>

      <h3 className='AboutProject__subtitle'>
        Who we are?
      </h3>

      <p className='AboutProject__text'>
        A transformative triple‑camera system that adds tons of capability
        without complexity.
        <br />
        <br />
        An unprecedented leap in battery life.
        And a mind‑blowing chip that doubles down on machine learning and
        pushes the boundariesof what a smartphone can do.
        Welcome to the first iPhone powerful enough to be called Pro.
      </p>

      <h3 className='AboutProject__subtitle'>
        Used features
      </h3>

      <p className='AboutProject__text'>
        Meet the first triple‑camera system to combine cutting‑edge technology
        with the legendary simplicity of iPhone. Capture up to four times more
        scene. Get beautiful images in drastically lower light. Shoot the
        highest‑quality video in a smartphone — then edit with the same tools
        you love for photos. You’ve never shot with anything like it.
      </p>

      <h3 className='AboutProject__subtitle'>
        To whom this website may concern?
      </h3>

      <p className='AboutProject__text'>
        iPhone 11 Pro lets you capture videos that are beautifully true
        to life, with greater detail and smoother motion. Epic processing
        power means it can shoot 4K video with extended dynamic range and
        cinematic video stabilization — all at 60 fps. You get more creative
        control, too, with four times more scene and powerful new editing
        tools to play with.
      </p>
    </div>
  );
};

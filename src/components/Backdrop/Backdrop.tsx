import React from 'react';
import ReactDom from 'react-dom';
import './Backdrop.scss';

type Props = {
  onClick: () => void;
};

export const Backdrop: React.FC<Props> = ({ onClick }) => {
  const backdropHook = document.getElementById('backdrop-hook') as HTMLElement;

  const content = (
    <div className="backdrop" onClick={onClick}></div>
  );

  return ReactDom.createPortal(content, backdropHook);
};

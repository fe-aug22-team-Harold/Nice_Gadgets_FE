import React from 'react';
import ReactDom from 'react-dom';
import { Backdrop } from '../Backdrop';
import './Modal.scss';
import { CSSTransition } from 'react-transition-group';

type Props = {
  children: React.ReactNode;
  header: string;
  show: boolean;
  className: string;
  onCancel: () => void;
};

const ModalOverlay: React.FC<Props> = (props) => {
  const {
    header,
    children,
    onCancel,
    className,
  } = props;

  const modalHook = document.getElementById('modal-hook') as HTMLElement;

  const content = (
    <div className={`modal ${className}`}>
      <header className="modal__header">
        <h2>{header}</h2>
        <span
          className="
          icon
          icon__close--modal
          icon__close--cart-item
        "
          onClick={onCancel}
        ></span>
      </header>
      <div className="modal__content">{children}</div>
    </div>
  );

  return ReactDom.createPortal(content, modalHook);
};

export const Modal: React.FC<Props> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

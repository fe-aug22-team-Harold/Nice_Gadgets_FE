import React, { useState } from 'react';
import './Checkout.scss';
import {
  useAppDispatch, useAppSelector, useLocalStorage,
} from '../../app/hooks';
import { client } from '../../utils/fetch';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { Link } from 'react-router-dom';
import { setCart } from '../../features/cartSlice';
import { Modal } from '../Modal';

export const Checkout: React.FC = () => {
  const { currentCart } = useAppSelector(state => state.cart);
  const { user } = useAppSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const [, setCartStored] = useLocalStorage('cart');
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const totalForCart = currentCart.reduce((acc, item) => acc + item.price, 0);

  const checkOutToAPI = async() => {
    if (!currentCart.length) {
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const itemsList = currentCart.map(item => item.name);

      // eslint-disable-next-line no-console
      console.log(itemsList);

      const data = {
        userid: user?.id,
        useremail: user?.email,
        orderList: itemsList,
        total: totalForCart,
      };

      await client.post('/orders', data);
      dispatch(setCart([]));
      setCartStored([]);
      openModalHandler();
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
    <Modal
      show={showModal}
      onCancel={closeModalHandler}
      header={'Thank You!'}
      className={'checkout__modal'}
    >
      <div className="checkout__message">
        <p>Your order has been successfully created.</p>
      </div>
    </Modal>
    <div
      className="checkout
        grid__item--desktop-17-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <h2 className="checkout__sum">
        $ {totalForCart}
      </h2>
      <p className="checkout__total-items">
        Total for {currentCart.length} items
      </p>
      {isError && <ErrorMessage message={'Error while creating order'} />}
      {user ? (
        <div
          onClick={checkOutToAPI}
          className="checkout__btn"
        >
          {currentCart.length
            ? (isLoading ? <Loader /> : 'Checkout')
            : 'Cart is empty'
          }
        </div>
      ) : (
        <Link to={'/login'} className="checkout__btn">
          Login to make an order
        </Link>
      )}
    </div>
    </>
  );
};

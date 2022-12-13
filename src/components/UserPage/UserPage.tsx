import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { client } from '../../utils/fetch';
import { useNavigate, Link } from 'react-router-dom';
import { Order } from '../../types/Order';
import './UserPage.scss';
import { LoaderBox } from '../LoaderBox';
import { ErrorMessage } from '../ErrorMessage';
import cn from 'classnames';

export const UserPage: React.FC = () => {
  const { user } = useAppSelector(state => state.user);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  const getUsersOrders = async() => {
    setIsLoading(true);

    try {
      const response = await client.get<Order[]>('/orders/' + user?.id);

      setOrders(response);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!user) {
      routeChange();

      return;
    }

    getUsersOrders();
  }, []);

  return (
    <div
      style={{ minHeight: '80vh', color: 'white' }}
      className="page__section--2 home-page user"
    >
      <h1 className='user__title'>Welcome to your account, {user?.name}!</h1>

      <div className="home-page__container user__page">
        <div className="user-info">
          <h4 className='user__subtitle'>Account info</h4>

          <div className='user__info'>Username: {user?.name}</div>
          <div className='user__info'>Email: {user?.email}</div>
          <div className='user__statuses'>
            <span className='user__info'>
              {user?.active ? 'Active account' : 'Please activate account'}
            </span>
            <div
              className={cn('user__status', {
                'user__status--disabled': !user?.active,
              })}
            >
            </div>
          </div>
        </div>

        {!orders?.length && !isLoading && (
          <div className='user__order'>
            <h4 className="user__subtitle">No orders yet</h4>

            <Link
              to={'/phones'}
              className="user__order--go-to-shop__link"
            >
              👉 Go to shop
            </Link>
          </div>
        )}

        {isLoading && <LoaderBox />}
        {isError && <ErrorMessage message={null} />}

        {orders && (
          <div className="user__orders">
            {orders.map(order => (
              <div className="user__order" key={order.id}>
                <span>Order id: {order.id}</span>
                <span>Total items: {order.orderList.length}</span>
                <span>Total price: ${order.total}</span>
                <span>
                  Date: {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

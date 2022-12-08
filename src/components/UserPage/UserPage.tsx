import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { client } from '../../utils/fetch';
import { useNavigate } from 'react-router-dom';
import { Order } from '../../types/Order';
import './UserPage.scss';
import { LoaderBox } from '../LoaderBox';
import { ErrorMessage } from '../ErrorMessage';

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
    <div style={{ minHeight: '80vh', color: 'white' }} className="home-page">
      <div className="home-page__container">
        <div className="user-info">
          <div>{user?.name}</div>
          <div>{user?.email}</div>
          <div
            style={{ color: user?.active ? '#357325' : '#9f3311' }}
          >
            {user?.active ? 'active account' : 'not active account'}
          </div>
        </div>
        <hr />
        {!orders?.length && !isLoading && (
          <div className="order">No orders yet</div>
        )}

        {isLoading && <LoaderBox />}
        {isError && <ErrorMessage message={null} />}

        {orders && (
          orders.map(order => (
            <div className="order" key={order.id}>
              <span>Order id: {order.id}</span>
              <span>Total items: {order.orderList.length}</span>
              <span>Total price: ${order.total}</span>
              <span>
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

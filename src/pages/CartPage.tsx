/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Cart } from '../components/Cart';
import phonesFromServer from '../mock_data/api/phones.json';
import { Phone } from '../types/Phone';

export {} from '../components/Cart';

type Props = {
  phones: Phone[];
};

const phones = phonesFromServer.slice(0, 3);

export const CartPage: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="cart__page">
        <Cart phones={phones} />
      </div>
    </div>
  );
};

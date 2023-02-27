import React from 'react';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  return <div>{phone.name}</div>;
};

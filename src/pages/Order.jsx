import React from 'react';
import {Heading} from 'components/Common/Heading';
import OrderForm from 'containers/OrderForm';

export const Order = props => {
  return (
    <div className="page__content-main">
      <Heading title="Shopping cart" subtitle={`3 items`} size="large" />
      <OrderForm />
    </div>
  );
};

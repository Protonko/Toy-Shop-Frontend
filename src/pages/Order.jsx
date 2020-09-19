import React from 'react';
import {SIZES} from 'typing/enums';
import {Heading} from 'components/Common/Heading';
import OrderForm from 'containers/OrderForm';

export const Order = () => {
  return (
    <div className="page__content-main">
      <Heading title="Shopping cart" subtitle={`3 items`} size={SIZES.LARGE} />
      <OrderForm />
    </div>
  );
};

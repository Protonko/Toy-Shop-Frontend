// types
import {SIZES} from 'models/enums';

import React, {FC} from 'react';
import Heading from 'containers/Heading';
import OrderForm from 'containers/OrderForm';
import Checkout from 'containers/Checkout';

export const Order: FC = () => {
  return (
    <div className="page__content-main">
      <Heading title="Shopping cart" size={SIZES.LARGE} />
      <OrderForm />
      <Checkout />
    </div>
  );
};

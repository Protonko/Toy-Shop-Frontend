// types
import {SIZES} from 'models/enums';

import React, {FC} from 'react';
import {Portal} from 'components/Portal/Portal';
import Heading from 'containers/Heading';
import OrderForm from 'containers/OrderForm';
import Checkout from 'containers/Checkout';

export const Order: FC = () => {
  return (
    <div className="page__content-main">
      <Heading title="Shopping cart" size={SIZES.LARGE} />
      <OrderForm />
      <Portal children={<Checkout />} />
    </div>
  );
};

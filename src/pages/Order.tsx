// types
import {SIZES} from 'models/enums';

import React, {FC} from 'react';
import Heading from 'containers/Heading';
import OrderForm from 'containers/OrderForm';

export const Order: FC = () => {
  return (
    <div className="page__content-main">
      <Heading title="Shopping cart" size={SIZES.LARGE} />
      <OrderForm />
    </div>
  );
};

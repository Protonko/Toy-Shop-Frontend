// types
import {IPayment} from 'models/interfaces';
import {TErrorMessage} from 'models/types';

import React, {FC, useEffect} from 'react';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import {PaymentBlock} from 'components/PaymentBlock/PaymentBlock';

interface IProps {
  items: Array<IPayment> | null,
  errorMessage: TErrorMessage,
  getPayment: () => void,
}

export const Payment: FC<IProps> = ({items, errorMessage, getPayment}) => {
  useEffect(() => {
    if (!items?.length) {
      getPayment();
    }
  }, []);

  const renderItem = (item: IPayment) => <PaymentBlock key={item.id} {...item} />;

  if (items) {
    return (
      <div className="page__content-main">
        <h2 className="page__content-title">Payment Methods</h2>
        <div className="payment">
          {items.map(renderItem)}
        </div>
      </div>
    )
  } else if (errorMessage) {
    return <Notification text={errorMessage} />
  } else {
    return <Loader />
  }
}

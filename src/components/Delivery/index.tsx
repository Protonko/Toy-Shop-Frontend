// types
import {IDelivery} from 'models/interfaces';

import React, {FC, useEffect} from 'react';
import {DeliveryCard} from 'components/DeliveryCard/DeliveryCard';
import {Notification} from 'components/Common/Notification';
import {Loader} from 'components/Common/Loader';

interface IProps {
  items: Array<IDelivery> | null,
  errorMessage: string | null,
  getDelivery: () => void,
}

export const Delivery: FC<IProps> = ({items, errorMessage, getDelivery}) => {
  useEffect(() => {
    if (!items?.length) {
      getDelivery();
    }
  }, []);

  const renderCards = (card: IDelivery) => <DeliveryCard key={card.id} {...card} />;

  if (items) {
    return (
      <div className="page__content-main">
        <h2 className="page__content-title">Cost of delivery</h2>
        <div className="delivery-cards">
          {items.map(renderCards)}
        </div>
      </div>
    )
  } else if (errorMessage) {
    return <Notification text={errorMessage} />
  } else {
    return <Loader />
  }
}

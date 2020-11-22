// types
import {IDelivery, IError} from 'models/interfaces';

import React, {FC, useState, useEffect, useCallback} from 'react';
import {DeliveryApi} from 'Api/Delivery';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import {DeliveryCard} from 'components/DeliveryCard/DeliveryCard';

export const Delivery: FC = () => {
  const [cards, setCards] = useState<Array<IDelivery> | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchCards = useCallback(() => {
    DeliveryApi.getData().then(
      response => {
        setCards(response);
        setErrorMessage(null);
      },
      (error: IError) => {
        setCards(null);
        setErrorMessage(error.message);
      },
    );
  }, [setCards, setErrorMessage]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const renderCards = (card: IDelivery) => <DeliveryCard key={card.id} {...card} />;

  if (cards) {
    return (
      <div className="page__content-main">
        <h2 className="page__content-title">Cost of delivery</h2>
        <div className="delivery-cards">
          {cards.map(renderCards)}
        </div>
      </div>
    )
  } else if (errorMessage) {
    return <Notification text={errorMessage} />
  } else {
    return <Loader />
  }
};

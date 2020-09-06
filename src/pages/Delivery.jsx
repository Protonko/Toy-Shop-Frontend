import React, {useState, useEffect, useCallback} from 'react';
import {API_URL_DELIVERY} from 'static';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import {DeliveryCard} from 'components/DeliveryCard/DeliveryCard';

export const Delivery = () => {
  const [cards, setCards] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchCards = useCallback(() => {
    fetch(API_URL_DELIVERY)
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setErrorMessage(null);
      })
      .catch(error => {
        setCards(null);
        setErrorMessage(error);
      });
  }, [setCards, setErrorMessage]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const renderCards = card => <DeliveryCard key={card.id} {...card} />;

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

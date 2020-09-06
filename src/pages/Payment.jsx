import React, {useState, useEffect, useCallback} from 'react';
import {API_URL_PAYMENT} from 'static';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import {PaymentBlock} from 'components/PaymentBlock/PaymentBlock';

export const Payment = () => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = useCallback(() => {
    fetch(API_URL_PAYMENT)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setErrorMessage(null);
      })
      .catch(error => {
        setData(null);
        setErrorMessage(error);
      });
  }, [setData, setErrorMessage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItem = item => <PaymentBlock key={item.id} {...item} />;

  if (data) {
    return (
      <div className="page__content-main">
        <h2 className="page__content-title">Payment Methods</h2>
        <div className="payment">
          {data.map(renderItem)}
        </div>
      </div>
    )
  } else if (errorMessage) {
    return <Notification text={errorMessage} />
  } else {
    return <Loader />
  }
};

import React from 'react';
import PropTypes from 'prop-types';
import {PriceLine} from './PriceLine';

export const OrderPrice = ({amount, total, fullPrice, sale}) => {
  const salePrice = sale ? sale : 0;
  return (
    <div className="order__price">
      <div className="order__price-block">
        <PriceLine text={`${amount} items`} price={`$${fullPrice}`} />
        <PriceLine text="Sale" price={`$${salePrice}`} isSale={true} />
      </div>
      <div className="order__price-block">
        <PriceLine text="Total price" price={`$${total}`} isBig={true} />
      </div>
    </div>
  );
};

OrderPrice.propTypes = {
  amount: PropTypes.number,
  total: PropTypes.number,
  fullPrice: PropTypes.number,
  sale: PropTypes.number,
};

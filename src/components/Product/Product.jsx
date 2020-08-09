import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../assets/images/placeholder.jpg';
import {CountButton} from '../Common/Buttons/CountButton';

export const Product = ({image = placeholder, title, price, sale, count}) => {
  const priceProduct = sale ? Math.round(price * sale) : price;

  return (
    <div className="product">
      <div className="product__info">
        <div className="product__image" style={{backgroundImage: `url(${image})`} }/>

        <div className="product__data">
          <div className="product__data-name">{title}</div>
          <div className="product__data-price">${priceProduct}</div>
        </div>
      </div>

      <div className="product__counter">
        <CountButton isMinus={true} />
        <div className="product__counter-number">
          {count}
        </div>
        <CountButton isMinus={false} />
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  sale: PropTypes.number,
  count: PropTypes.number,
};

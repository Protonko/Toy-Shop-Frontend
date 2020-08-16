import React from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import placeholder from '../../assets/images/placeholder.jpg';

export const Product = ({product, removeFromCart}) => {
  const {image = placeholder, title, price, sale} = product;
  const priceProduct = sale ? Math.round(price * sale) : price;

  return (
    <div className="product">
      <div className="product__info">
        <div className="product__image" style={{backgroundImage: `url(${image})`} }/>

        <div className="product__data">
          <Dotdotdot clamp={1}>
            <div className="product__data-name">{title}</div>
          </Dotdotdot>
          <div className="product__data-price">${priceProduct}</div>
        </div>
      </div>

      <div className="product__actions">
        <ul className="product__actions-list list list--reset">
          <li className="product__actions-item">
            <button className="product__action button button--red" onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  removeFromCart: PropTypes.func,
};

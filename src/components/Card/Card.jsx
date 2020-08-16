import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from '../Common/Buttons/Button';

export const Card = props => {
  const {product, selectedProducts, addToCart, removeFromCart} = props;
  const {price, sale, image, title} = product;
  const isAdded = selectedProducts.find(item => item.id === product.id);
  const productPrice = sale ? Math.round(price * sale) : price;
  const titleButton = isAdded ? 'Added' : 'Add to card';
  const classNamesPrice = classNames('card__data-price-text', {'card__data-price-text--new': sale});
  const classNamesButton = classNames('button', {'button--active': isAdded});

  const handleClickCartButton = product => {
    isAdded
      ? removeFromCart(product)
      : addToCart(product);
  };

  return (
    <article className="card">
      <div className="card__image">
        <img src={image} alt={title} className="card__image-pic"/>
      </div>

      <div className="card__data">
        <div className="card__section card__section--body">
          <div className="card__data-price">
            <span className={classNamesPrice}>
              ${productPrice}
            </span>
            {sale && (
              <s className="card__data-price-text card__data-price-text--old">
                ${price}
              </s>
            )}
          </div>
          <h2 className="card__data-title">
            {title}
          </h2>
        </div>
        <div className="card__section card__section--footer">
          <div className="card__data-actions">
            <ul className="card__data-actions-list list list--reset">
              <li className="card__data-actions-item">
                <Button
                  title={titleButton}
                  classNames={classNamesButton}
                  onClick={() => handleClickCartButton(product)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  selectedProducts: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

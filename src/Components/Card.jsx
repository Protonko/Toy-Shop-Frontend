import React from 'react';
import classNames from 'classnames';
import {Button} from './Common/Button';

export const Card = (product) => {
    const {price, sale, image, title, addToCart, countAddedProduct} = product;
    const isSale = Boolean(sale);
    const isAdded = Boolean(countAddedProduct);
    const productPrice = isSale ? Math.round(price * sale) : price;
    const counterProduct = isAdded ? `(${countAddedProduct})` : '';
    const classNamesPrice = classNames('card__data-price-text', {'card__data-price-text--new': isSale});

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
                      {isSale && (
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
                                  title={`Add to card ${counterProduct}`}
                                  onClick={() => addToCart(product)}
                              />
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
        </article>
  )
};

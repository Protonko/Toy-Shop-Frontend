// types
import {IProduct} from 'models/interfaces';
import {TITLES_BUTTON} from 'models/enums';
import {TTitleButton} from 'models/types';

import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Button} from 'components/Common/Buttons/Button';
import {Rating} from 'components/Common/Rating';
import Dotdotdot from 'react-dotdotdot';

export interface IProps {
  product: IProduct,
  selectedProducts: Array<IProduct>,
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
}

export const Card: FC<IProps> = props => {
  const {product, selectedProducts, addToCart, removeFromCart} = props;
  const {price, sale, image, title, id, rating} = product;
  const productPrice = sale ? Math.round(price * sale) : price;
  const isAdded = !!selectedProducts.find(
    (item: IProduct) => item.id === product.id);
  const titleButton: TTitleButton = isAdded ? TITLES_BUTTON.ADDED : TITLES_BUTTON.ADD;
  const classNamesPrice =
    classNames('card__data-price-text', {'card__data-price-text--new': sale});

  const handleClickCartButton = (product: IProduct): void => {
    isAdded ? removeFromCart(product) : addToCart(product);
  };

  return (
    <article className="card">
      <Link to={`/product/${id}`} className="card__image">
        <img src={image} alt={title} className="card__image-pic"/>
      </Link>

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
          <Dotdotdot clamp={3}>
            <Link to={`/product/${id}`} className="card__data-title">{title}</Link>
          </Dotdotdot>
        </div>
        <div className="card__section card__section--footer">
          <Rating rating={rating} />
          <div className="card__data-actions">
            <ul className="card__data-actions-list list list--reset">
              <li className="card__data-actions-item">
                <Button
                  title={titleButton}
                  classNamesAdditional={[{'button--active': isAdded}]}
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

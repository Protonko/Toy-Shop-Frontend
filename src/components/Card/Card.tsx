// types
import {IProduct} from 'models/interfaces';
import {TITLES_BUTTON} from 'models/enums';
import {TTitleButton} from 'models/types';

import React, {useMemo, memo, FC} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';
import {checkSelectedProducts} from 'utils/checkSelectedProducts';
import {Button} from 'components/Common/Buttons/Button';
import {Rating} from 'components/Common/Rating';

export interface IProps {
  product: IProduct,
  selectedProducts: Array<IProduct>,
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
}

const CardComponent: FC<IProps> = props => {
  const {product, selectedProducts, addToCart, removeFromCart} = props;
  const {price, sale, image, title, id, rating} = product;

  const productPrice = useMemo(() => {
    return sale ? Math.round(price * sale) : price;
  }, [price, sale]);

  const isAdded = !!useMemo(() => {
    return checkSelectedProducts(selectedProducts, product);
  }, [product.id, selectedProducts]);

  const titleButton: TTitleButton = useMemo(() => {
    return isAdded ? TITLES_BUTTON.ADDED : TITLES_BUTTON.ADD;
  }, [isAdded]);

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

export const Card = memo(CardComponent, (prevProps: any, nextProps: any): any => {
  const prevProducts = checkSelectedProducts(prevProps.selectedProducts, prevProps.product);
  const nextProducts = checkSelectedProducts(nextProps.selectedProducts, nextProps.product);

  return prevProducts === nextProducts;
});

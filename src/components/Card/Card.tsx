import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {IProduct} from 'models/interfaces';
import {IAddToCart, IRemoveFromCart} from 'models/store/actions/cart';
import {Button} from 'components/Common/Buttons/Button';

interface ICardProps {
  product: IProduct,
  selectedProducts: Array<IProduct>,
  addToCart: (product: IProduct) => IAddToCart,
  removeFromCart: (product: IProduct) => IRemoveFromCart,
}

enum TitlesButton {
  ADDED = 'Added',
  ADD = 'Add to card',
}

type TTitleButton = TitlesButton.ADDED | TitlesButton.ADD

export const Card: FC<ICardProps> = props => {
  const {product, selectedProducts, addToCart, removeFromCart} = props;
  const {price, sale, image, title, id} = product;
  const productPrice: number = sale ? Math.round(price * sale) : price;
  const isAdded: boolean =
    !!selectedProducts.find((item: IProduct) => item.id === product.id);
  const titleButton: TTitleButton = isAdded ? TitlesButton.ADDED : TitlesButton.ADD;
  const classNamesPrice: string =
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
          <Link to={`/product/${id}`} className="card__data-title">{title}</Link>
        </div>
        <div className="card__section card__section--footer">
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

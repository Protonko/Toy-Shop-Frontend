import React, {FC} from 'react';
import Dotdotdot from 'react-dotdotdot';
import placeholder from 'assets/images/placeholder.jpg';
import {IProduct} from 'models/interfaces';
import {Button} from 'components/Common/Buttons/Button';

interface IProductProps {
  product: IProduct,
  removeFromCart: (product: IProduct) => any, // TODO - убрать
}

export const Product: FC<IProductProps> = ({
  product,
  removeFromCart,
}) => {
  const {image = placeholder, title, price, sale} = product;
  const priceProduct: number = sale ? Math.round(price * sale) : price;

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
            <Button
              title="Remove"
              onClick={() => removeFromCart(product)}
              isRemoved={true}
              classNamesAdditional={['product__action']}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

import React, {FC, useState} from 'react';
import {ReactComponent as CartLogo} from 'assets/icons/cart.svg';
import {TClassName} from 'models/types';
import {IProduct} from 'models/interfaces';
import {CartPopup} from './CartPopup';
import {ButtonIconed} from 'components/Common/Buttons/ButtonIconed';

interface IProps {
  total: number,
  countProducts: number,
  items: Array<IProduct>,
  removeFromCart: (item: IProduct) => void,
}

export const Cart: FC<IProps> = ({
  total,
  countProducts,
  items,
  removeFromCart,
}) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const classNamesButton: TClassName = [
    'cart__button',
    {'cart__button--counter': !!countProducts},
    {'cart__button--active': popupVisible}
  ];

  return (
    <div className="cart">
      <ul className="cart__list list list--reset">
        <li className="cart__item">
          <div className="cart__price">
            <dl className="cart__price-list list list--reset">
              <dt className="cart__price-item cart__price-item--term">
                Total:
              </dt>
              <dd className="cart__price-item cart__price-item--description">
                ${total}
              </dd>
            </dl>
          </div>
        </li>
        <li className="cart__item">
          <ButtonIconed
            data-count={countProducts}
            disabled={false}
            classNamesAdditional={classNamesButton}
            onClick={() => setPopupVisible(!popupVisible)}>
            <span className="cart__button-icon">
              <CartLogo />
            </span>
          </ButtonIconed>

          {popupVisible &&
            <CartPopup
              items={items}
              setPopupVisible={setPopupVisible}
              removeFromCart={removeFromCart}
            />
          }
        </li>
      </ul>
    </div>
  );
};

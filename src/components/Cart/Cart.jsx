import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as CartLogo} from 'assets/icons/cart.svg';
import {CartPopup} from './CartPopup';
import {ButtonIconed} from 'components/Common/Buttons/ButtonIconed';

export const Cart = ({total, countProducts, items, removeFromCart}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const classNamesButton = [
    'cart__button',
    {'cart__button--counter': countProducts},
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

Cart.propTypes = {
  total: PropTypes.number,
  countProducts: PropTypes.number,
  items: PropTypes.array,
  removeFromCart: PropTypes.func,
};

import React from 'react';
import 'classnames';
import {ReactComponent as CartLogo} from '../../assets/icons/cart.svg';
import classNames from 'classnames';

export const Cart = ({total, countProducts}) => {
    const isProductsInCart = Boolean(countProducts);
    const classNamesButton = classNames(
            'cart__button',
            'button button--iconed',
            {'cart__button--counter': isProductsInCart}
        );

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
                    <button data-count={countProducts} className={classNamesButton}>
                        <span className="cart__button-icon">
                            <CartLogo />
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

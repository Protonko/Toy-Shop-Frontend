import React, {FC, useRef} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Scrollbars} from 'react-custom-scrollbars';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Product} from 'components/Product/Product';
import {IProduct} from 'models/interfaces';

interface ICartPopupProps {
  setPopupVisible: (popupVisible: boolean) => void,
  removeFromCart: (item: IProduct) => any, // TODO - убрать
  items: Array<IProduct>,
}

export const CartPopup: FC<ICartPopupProps> = ({
 setPopupVisible,
 removeFromCart,
 items,
}) => {
  const popup = useRef<HTMLElement>(null);
  const isItemsInCart: boolean = !!items.length;
  const classNamesButton: string =
    classNames('popup__button', 'button', {'button--disabled': !isItemsInCart});

  useOutsideClick<HTMLElement>(popup, () => setPopupVisible(false));

  const renderItem = (product: IProduct) => (
    <Product key={product.id} product={product} removeFromCart={removeFromCart} />
  );

  return (
    <article className="popup drop-down" ref={popup}>
      <div className="popup__section popup__section--body">
        <Scrollbars>
          <div className="popup__scrollable-content">
            {isItemsInCart
              ? items.map(renderItem)
              : (
                <div className="popup__wrapper">
                  <p className="popup__text">
                    Your cart is empty.
                  </p>
                </div>
              )
            }
          </div>
        </Scrollbars>
      </div>

      <footer className="popup__section popup__section--footer">
        <Link
          to={'/order'}
          className={classNamesButton}
          onClick={() => setPopupVisible(false)}
        >
          Proceed to checkout
        </Link>
      </footer>
    </article>
  );
};

import React, {FC, useRef} from 'react';
import {Link} from 'react-router-dom';
import {Transition} from 'react-transition-group';
import classNames from 'classnames';
import {Scrollbars} from 'react-custom-scrollbars';
import {TRANSITION_DURATION_LONG} from 'static';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Product} from 'components/Product/Product';
import {IProduct} from 'models/interfaces';

interface IProps {
  setPopupVisible: (popupVisible: boolean) => void,
  removeFromCart: (item: IProduct) => void,
  items: Array<IProduct>,
  popupVisible: boolean,
}

const TRANSITION_CLASSNAMES: any = {
  entering: 'popup--drop',
  entered: '',
  exiting: 'popup--up',
  exited: '',
}

export const CartPopup: FC<IProps> = ({
 setPopupVisible,
 removeFromCart,
 items,
 popupVisible,
}) => {
  const popup = useRef<HTMLElement>(null);
  const isItemsInCart: boolean = !!items.length;
  const classNamesButton = classNames(
    'popup__button',
    'button', {'button--disabled': !isItemsInCart}
    );

  useOutsideClick<HTMLElement>(popup, () => setPopupVisible(false));

  const renderItem = (product: IProduct) => (
    <Product key={product.id} product={product} removeFromCart={removeFromCart} />
  );

  return (
    <Transition
      in={popupVisible}
      timeout={TRANSITION_DURATION_LONG}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => {
        const classNamesPopup = classNames(
          'popup',
          {[TRANSITION_CLASSNAMES[state]]: !!TRANSITION_CLASSNAMES[state]}
          );

        return (
          <article className={classNamesPopup} ref={popup}>
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
        )
      }}
    </Transition>
  );
};

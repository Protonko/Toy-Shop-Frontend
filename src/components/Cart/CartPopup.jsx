import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useOutsideClick} from '../../hooks/useOutsideClick';
import {Scrollbars} from 'react-custom-scrollbars';
import {Product} from '../Product/Product';

export const CartPopup = ({setPopupVisible, items}) => {
  const popup = useRef();

  useOutsideClick(popup, () => setPopupVisible(false));

  return (
    <article className="popup drop-down" ref={popup}>
      <div className="popup__section popup__section--body">
        <Scrollbars>
          <div className="popup__scrollable-content">
            {items.length
              ? items.map((product, index) => <Product key={index} {...product} />)
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
        <button className="popup__button button">Proceed to checkout</button>
      </footer>
    </article>
  );
};

CartPopup.propTypes = {
  setPopupVisible: PropTypes.func,
  items: PropTypes.array,
};

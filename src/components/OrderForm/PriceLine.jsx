import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PriceLine = ({text, price, isSale, isBig}) => {
  const classNamesPrice = classNames(
    'order__price-label',
    'order__price-label--bold',
    {'order__price-label--sale': isSale},
    {'order__price-label--big': isBig},
  );
  const classNamesLabel = classNames(
    'order__price-label',
    {'order__price-label--bold': isBig},
    {'order__price-label--big': isBig},
  )

  return (
    <div className="order__price-line">
      <p className={classNamesLabel}>
        {text}
      </p>
      <p className={classNamesPrice}>
        {price}
      </p>
    </div>
  )
};

PriceLine.propTypes = {
  text: PropTypes.string,
  price: PropTypes.string,
  isSale: PropTypes.bool,
  isBig: PropTypes.bool,
}

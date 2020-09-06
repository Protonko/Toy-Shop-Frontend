import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const DeliveryCardItem = ({term, value, marked}) => {
  const valueClassnames = classNames(
    'delivery-card__line-item',
    'delivery-card__line-item--description',
    {'delivery-card__line-item--colored': marked}
  );

  return (
    <>
      <dt className="delivery-card__line-item delivery-card__line-item--term">
        {term}
      </dt>
      <dd className={valueClassnames}>
        {value}
      </dd>
    </>
  )
}

DeliveryCardItem.propTypes = {
  term: PropTypes.string,
  value: PropTypes.string,
  marked: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';
import {DeliveryCardItem} from './DeliveryCardItem'

export const DeliveryCardLine = ({items, description}) => {
  const renderItem = item => <DeliveryCardItem {...item} key={item.id} />;

  return (
    <div className="delivery-card__line">
      <div className="delivery-card__line-info">
        <dl className="delivery-card__line-list list list--reset">
          {items.map(renderItem)}
        </dl>
      </div>
      <p className="delivery-card__line-description">
        {description}
      </p>
    </div>
  );
}

DeliveryCardLine.propTypes = {
  items: PropTypes.array,
  description: PropTypes.string,
};

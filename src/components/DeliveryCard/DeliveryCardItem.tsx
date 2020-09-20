import React, {FC} from 'react';
import classNames from 'classnames';
import {ILinesItems} from 'models/interfaces';

export const DeliveryCardItem: FC<ILinesItems> = ({
  term,
  value,
  marked,
}) => {
  const valueClassnames: string = classNames(
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

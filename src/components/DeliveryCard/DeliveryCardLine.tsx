import React, {FC} from 'react';
import {ILinesItems} from 'models/interfaces';
import {DeliveryCardItem} from './DeliveryCardItem';

interface IDeliveryCardLineProps {
  items: Array<ILinesItems>,
  description: string,
}

export const DeliveryCardLine: FC<IDeliveryCardLineProps> = ({
  items,
  description,
}) => {
  const renderItem = (item: ILinesItems) => <DeliveryCardItem {...item} key={item.id} />;

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

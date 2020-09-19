import React, {FC} from 'react';
import {IDelivery, ILines} from 'typing/interfaces';
import {DeliveryCardLine} from './DeliveryCardLine';

export const DeliveryCard: FC<IDelivery> = ({
  lines,
  title,
  description,
}) => {
  const renderLine = (line: ILines) => <DeliveryCardLine {...line} key={line.id}  />

  return (
    <article className="delivery-card">
      <header className="delivery-card__section delivery-card__section--header">
        <h2 className="delivery-card__title">
          {title}
        </h2>
      </header>
      <div className="delivery-card__section delivery-card__section--body">
        <div className="delivery-card__col">
          {lines.map(renderLine)}
        </div>
        <div className="delivery-card__col">
          {description}
        </div>
      </div>
    </article>
  );
}

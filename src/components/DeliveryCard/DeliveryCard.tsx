// types
import {IDelivery, ILines} from 'models/interfaces';

import React, {FC} from 'react';
import {DottedLine} from 'components/Common/DottedLine/DottedLine';

export const DeliveryCard: FC<IDelivery> = ({
  lines,
  title,
  description,
}) => {
  const renderLine = (line: ILines) =>
    <DottedLine {...line} key={line.id}  />

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

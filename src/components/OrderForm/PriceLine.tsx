import React, {FC} from 'react';
import classNames from 'classnames';

interface IPriceLineProps {
  text: string,
  price: string,
  isSale: boolean,
  isBig: boolean,
}

export const PriceLine: FC<IPriceLineProps> = ({
  text,
  price,
  isSale,
  isBig,
}) => {
  const classNamesPrice: string = classNames(
    'order__price-label',
    'order__price-label--bold',
    {'order__price-label--sale': isSale},
    {'order__price-label--big': isBig},
  );
  const classNamesLabel: string = classNames(
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
  );
};

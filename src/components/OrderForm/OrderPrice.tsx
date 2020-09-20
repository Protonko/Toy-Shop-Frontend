import React, {FC} from 'react';
import {IOrderCost} from 'typing/interfaces';
import {PriceLine} from './PriceLine';

export const OrderPrice: FC<IOrderCost> = ({
  amount,
  total,
  fullPrice,
  sale,
}) => {
  const salePrice: number = sale ? sale : 0;

  return (
    <div className="order__price">
      <div className="order__price-block">
        <PriceLine
          text={`${amount} items`}
          price={`$${fullPrice}`}
          isSale={false}
          isBig={false}
        />
        <PriceLine
          text="Sale"
          price={`$${salePrice}`}
          isSale={true}
          isBig={false}
        />
      </div>
      <div className="order__price-block">
        <PriceLine
          text="Total price"
          price={`$${total}`}
          isSale={false}
          isBig={true}
        />
      </div>
    </div>
  );
};

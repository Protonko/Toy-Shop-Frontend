// types
import {IOrderCost} from 'models/interfaces';

import React, {FC} from 'react';
import {DESCRIPTION_ORDER} from 'static';
import {Heading} from 'components/Common/Heading';
import {OrderPrice} from './OrderPrice';
import {FormSubmit} from './FormSubmit';

interface IProps extends IOrderCost {
  cartItemsAmount: number,
  onClick: () => void,
}

export const FormTotalCost: FC<IProps> = ({
  amount,
  total,
  fullPrice,
  sale,
  cartItemsAmount,
  onClick,
}) => {
  const disabled = !(total && cartItemsAmount);

  return (
    <div className="order__section order__section--footer order__box">
      <Heading title="Your order" />
      <OrderPrice
        amount={amount}
        total={total}
        fullPrice={fullPrice}
        sale={sale}
      />
      <FormSubmit
        text={DESCRIPTION_ORDER}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
};

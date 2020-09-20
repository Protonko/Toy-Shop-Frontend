import React, {FC} from 'react';
import {DESCRIPTION_ORDER} from 'static';
import {IOrderCost} from 'models/interfaces';
import {Heading} from 'components/Common/Heading';
import {OrderPrice} from './OrderPrice';
import {FormSubmit} from './FormSubmit';

export const FormTotalCost: FC<IOrderCost> = ({
  amount,
  total,
  fullPrice,
  sale,
}) => {
  return (
    <div className="order__section order__section--footer order__box">
      <Heading title="Your order" />
      <OrderPrice
        amount={amount}
        total={total}
        fullPrice={fullPrice}
        sale={sale}
      />
      <FormSubmit text={DESCRIPTION_ORDER} onClick={() => true} />
    </div>
  );
};

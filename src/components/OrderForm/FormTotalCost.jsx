import React from 'react';
import PropTypes from 'prop-types';
import {DESCRIPTION_ORDER} from 'static';
import {Heading} from 'components/Common/Heading';
import {OrderPrice} from './OrderPrice';
import {FormSubmit} from './FormSubmit';

export const FormTotalCost = ({amount, total, fullPrice, sale}) => {
  return (
    <div className="order__section order__section--footer order__box">
      <Heading title="Your order" />
      <OrderPrice
        amount={amount}
        total={total}
        fullPrice={fullPrice}
        sale={sale}
      />
      <FormSubmit text={DESCRIPTION_ORDER} />
    </div>
  );
};

FormTotalCost.propTypes = {
  amount: PropTypes.number,
  total: PropTypes.number,
  fullPrice: PropTypes.number,
  sale: PropTypes.number,
}

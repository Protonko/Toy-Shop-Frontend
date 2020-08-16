import React from 'react';
import PropTypes from 'prop-types';
import {FormHeader} from './FormHeader';
import {FormTotalCost} from './FormTotalCost';
import {ProductLines} from 'components/ProductLine/ProductLines';

export const OrderForm = ({cartItems, total, fullPrice, sale}) => {
  const cartItemsAmount = cartItems.length;

  return (
    <form className="order">
      <FormHeader onChange={{}} onClick={{}} />

      <div className="order__section order__section--body">
        <ProductLines products={cartItems} />
      </div>
      <FormTotalCost
        amount={cartItemsAmount}
        total={total}
        fullPrice={fullPrice}
        sale={sale}
      />
    </form>
  )
}

OrderForm.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
  fullPrice: PropTypes.number,
  sale: PropTypes.number,
};

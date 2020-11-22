// types
import {IProduct} from 'models/interfaces';

import React, {FC} from 'react';
import {ProductLines} from 'components/ProductLine/ProductLines';
import {FormHeader} from './FormHeader';
import {FormTotalCost} from './FormTotalCost';

interface IProps {
  toggleSelectProduct: (id: number | string) => void,
  deleteSelected: () => void,
  cartItems: Array<IProduct>,
  cartSelectedItems?: Array<IProduct>,
  total: number,
  fullPrice: number,
  sale: number,
}

export const OrderForm: FC<IProps> = ({
  cartItems,
  toggleSelectProduct,
  deleteSelected,
  total,
  fullPrice,
  sale,
}) => {
  const cartItemsAmount = cartItems.length;

  return (
    <form className="order">
      <FormHeader toggleSelectProduct={toggleSelectProduct} onClick={deleteSelected} />

      <div className="order__section order__section--body">
        <ProductLines
          products={cartItems}
          toggleSelectProduct={toggleSelectProduct}
        />
      </div>
      <FormTotalCost
        amount={cartItemsAmount}
        total={total}
        fullPrice={fullPrice}
        sale={sale}
        cartItemsAmount={cartItemsAmount}
      />
    </form>
  )
}

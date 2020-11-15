import React, {FC} from 'react';
import {Button} from 'components/Common/Buttons/Button';

interface IProps {
  price: number,
  priceWithSale: number,
  sale: boolean,
  onClick: () => void,
}

export const OrderBlock: FC<IProps> = ({
  price,
  priceWithSale,
  sale,
  onClick,
}) => {
  return (
    <>
      <div className="product-content__order-price">
        <span className="product-content__order-price-relevant">
          ${priceWithSale}
        </span>
        {sale && (
          <s className="product-content__order-price-old">
            ${price}
          </s>
        )}
      </div>
      <Button
        title="Add to cart"
        classNamesAdditional={[
          {'button--active': false},
          'product-content__order-button'
        ]}
        onClick={onClick}
      />
    </>
  )
}

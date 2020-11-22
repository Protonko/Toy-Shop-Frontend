import React, {FC} from 'react';
import {Button} from 'components/Common/Buttons/Button';

interface IProps {
  price: number,
  priceWithSale: number,
  sale: boolean,
  isAdded: boolean,
  onClick: () => void,
}

export const OrderBlock: FC<IProps> = ({
  price,
  priceWithSale,
  sale,
  onClick,
  isAdded,
}) => {
  const title = isAdded ? 'Remove from cart' : 'Add to cart';

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
        title={title}
        classNamesAdditional={[
          {'button--active': isAdded},
          'product-content__order-button'
        ]}
        onClick={onClick}
      />
    </>
  )
}

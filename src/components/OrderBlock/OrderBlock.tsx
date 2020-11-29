import React, {FC} from 'react';
import {Button} from 'components/Common/Buttons/Button';
import {Rating} from 'components/Common/Rating';

interface IProps {
  price: number,
  priceWithSale: number,
  rating: number
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
  rating,
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
      <div className="product-content__order-rating">
        <Rating rating={rating} />
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

import React, {FC} from 'react';
import {Button} from 'components/Common/Buttons/Button';

export const OrderBlock: FC = () => {
  return (
    <>
      <div className="product-content__order-price">
        <span className="product-content__order-price-relevant">
          $ 213
        </span>
        <s className="product-content__order-price-old">
          $ 68867
        </s>
      </div>
      <Button
        title={'titleButton'}
        classNamesAdditional={[
          {'button--active': false},
          'product-content__order-button'
        ]}
        onClick={() => true}
      />
    </>
  )
}

import React, {FC} from 'react';
import {Carousel} from 'components/Carousel/Carousel';
import {Description} from 'components/Common/Description/Description';
import {OrderBlock} from 'components/OrderBlock/OrderBlock';

export const ProductDetail: FC = () => {
  return (
    <>
      <Carousel />
      <Description />
      <OrderBlock />
    </>
  );
}

import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetailContainer from 'containers/ProductDetailContainer';

export const ProductDetailPage: FC = () => {
  return (
    <div className="product-content">
      <ProductDetailContainer />
    </div>
  )
}

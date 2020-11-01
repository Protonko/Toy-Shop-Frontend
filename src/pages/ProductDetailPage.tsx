import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ProductDetail} from 'components/ProductDetail/ProductDetail';

interface IRouteParams {
  id?: string,
}

export const ProductDetailPage: FC = () => {
  const {id} = useParams<IRouteParams>();

  useEffect(() => {

  });

  return (
    <div className="product-content">
      <ProductDetail />
    </div>
  );
}

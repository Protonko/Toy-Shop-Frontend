import React from 'react';
import {useParams} from "react-router-dom";
import {ProductDetail} from 'components/ProductDetail/ProductDetail';

export const ProductDetailPage = () => {
  const {id} = useParams();
  return (
    <div>
      Hello {id}
      <ProductDetail />
    </div>
  );
}

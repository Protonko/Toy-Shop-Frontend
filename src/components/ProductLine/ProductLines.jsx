import React from 'react';
import PropTypes from 'prop-types';
import {ProductLine} from './ProductLine';

export const ProductLines = ({products, toggleSelectProduct}) => {
  const renderProducts = product => (
    <li className="product-lines__item" key={product.id}>
      <ProductLine {...product} onChange={() => toggleSelectProduct(product.id)} />
    </li>
  );

  return (
    <div className="product-lines">
      <ul className="product-lines__list list list--reset">
        {products.map(renderProducts)}
      </ul>
    </div>
  );
};

ProductLines.propTypes = {
  toggleSelectProduct: PropTypes.func,
  products: PropTypes.array,
};

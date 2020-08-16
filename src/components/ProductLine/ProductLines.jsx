import React from 'react';
import PropTypes from 'prop-types';
import {ProductLine} from './ProductLine';

export const ProductLines = ({products}) => {
  return (
    <div className="product-lines">
      <ul className="product-lines__list list list--reset">
        {products.map(product => (
          <li className="product-lines__item">
            <ProductLine {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductLines.propTypes = {
  products: PropTypes.array,
};

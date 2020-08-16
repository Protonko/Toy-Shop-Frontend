import React from 'react';
import PropTypes from 'prop-types';
import Card from 'containers/Card';

export const Cards = ({products, selectedProducts}) => (
  <div className="cards">
    <ul className="cards__list list list--reset">
      {products.map((product, index) => (
        <li key={index} className="cards__item">
          <Card product={product} selectedProducts={selectedProducts} />
        </li>
      ))}
    </ul>
  </div>
);

Cards.propTypes = {
  products: PropTypes.object,
  selectedProducts: PropTypes.array
};

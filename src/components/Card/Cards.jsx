import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'components/Card/Card';

export const Cards = ({
  products,
  selectedProducts,
  addToCart,
  removeFromCart
}) => {
  const renderCard = product => (
    <li key={product.id} className="cards__item">
      <Card
        product={product}
        selectedProducts={selectedProducts}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </li>
  );

  return (
    <div className="cards">
      <ul className="cards__list list list--reset">
        {products.map(renderCard)}
      </ul>
    </div>
  );
}

Cards.propTypes = {
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  products: PropTypes.array,
  selectedProducts: PropTypes.array
};

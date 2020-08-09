import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../containers/Card';

export const Cards = ({products}) => (
  <div className="cards">
    <ul className="cards__list list list--reset">
      {products.map((product, index) => (
        <li key={index} className="cards__item">
          <Card {...product} />
        </li>
      ))}
    </ul>
  </div>
);

Cards.propTypes = {
  products: PropTypes.array,
};

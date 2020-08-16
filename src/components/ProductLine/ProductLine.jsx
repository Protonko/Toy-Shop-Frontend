import React from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import {Checkbox} from 'components/Common/Checkbox';

export const ProductLine = ({title, price, image}) => {
  return (
    <label className="product-line">
      <div className="product-line__info">
        <Checkbox />

        <div className="product-line__image" style={{backgroundImage: `url(${image})`} }/>

        <Dotdotdot className="product-line__truncate" clamp={2}>
          <div className="product-line__title">{title}</div>
        </Dotdotdot>
      </div>

      <p className="product-line__price">
        ${price}
      </p>
    </label>
  )
}

ProductLine.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

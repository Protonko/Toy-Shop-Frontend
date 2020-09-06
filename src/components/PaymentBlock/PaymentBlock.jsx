import React from 'react';
import PropTypes from 'prop-types';

export const PaymentBlock = ({title, description, image}) => {
  return (
    <div className="payment__block">
      <h2 className="payment__block-title">{title}</h2>
      <p className="payment__block-description">{description}</p>
      {image && (
        <div className="payment__block-image">
          <img src={image} alt={title} className="payment__block-image-pic" />
        </div>
      )}
    </div>
  );
};

PaymentBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

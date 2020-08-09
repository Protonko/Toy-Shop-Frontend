import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({title, onClick}) => (
    <button className="button" onClick={onClick}>
      {title}
    </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

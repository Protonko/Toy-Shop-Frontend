import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({text}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input"/>
      <span className="checkbox__text">{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
};

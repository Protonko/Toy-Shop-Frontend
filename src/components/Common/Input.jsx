import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({placeholder, onChange}) => (
    <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
    />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

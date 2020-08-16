import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'components/Common/Input';

export const FilterSearch = ({placeholder, onChange}) => (
  <li className="sidebar__item">
    <Input
      placeholder={placeholder}
      onChange={onChange}
    />
  </li>
);

FilterSearch.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

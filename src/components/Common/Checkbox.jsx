import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Checkbox = ({
  text,
  classNamesText = [],
  checked,
  onChange
}) => {
  const classNamesCheckboxText = classNames(
    'checkbox__text',
    ...classNamesText,
  );

  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" checked={checked} onChange={onChange} />
      <span className={classNamesCheckboxText}>{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  classNamesAdditional: PropTypes.array,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

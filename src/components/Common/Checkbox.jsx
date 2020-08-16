import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Checkbox = ({text, classNamesText = [], onChange}) => {
  const classNamesCheckboxText = classNames(
    'checkbox__text',
    ...classNamesText,
  );

  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" onChange={onChange} />
      <span className={classNamesCheckboxText}>{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  classNamesAdditional: PropTypes.array,
};

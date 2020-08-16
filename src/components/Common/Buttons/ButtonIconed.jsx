import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const ButtonIconed = ({
  children,
  onClick,
  disabled,
  classNamesAdditional = [],
  ...attrs
}) => {
  const classNamesButton = classNames(
    'button',
    'button--iconed',
    {'button--disabled': disabled},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
}

ButtonIconed.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classNamesAdditional: PropTypes.array,
};

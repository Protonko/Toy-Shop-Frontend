import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ButtonLink = ({
  text,
  disabled,
  isRemoved,
  onClick,
  classNamesAdditional = []
}) => {
  const classNamesButton = classNames(
    'button',
    'button--linked',
    {'button--colored-red': isRemoved},
    {'button--disabled': disabled},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick}>
      {text}
    </button>
  )
}

ButtonLink.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  isRemoved: PropTypes.bool,
  onClick: PropTypes.func,
  classNamesAdditional: PropTypes.array,
};

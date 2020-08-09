import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CountButton = ({isMinus, onClick}) => {
  const classNamesButton = classNames(
      'button',
      'button--count',
      {'button--count-minus': isMinus}
  );

  return (
      <button className={classNamesButton} onClick={onClick} data-symbol={isMinus ? '-' : '+'} />
  );
};

CountButton.propTypes = {
  isMinus: PropTypes.bool,
  onClick: PropTypes.func,
};

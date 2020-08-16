import React from 'react';
import PropTypes from 'prop-types';

const SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
};

export const Heading = ({title, subtitle, size = 'medium'}) => {
  const modifier = SIZES[size] ?? 'md';

  return (
    <div className={`heading heading--${modifier}`}>
      <h2 className="heading__text heading__text--title">{title}</h2>
      {subtitle && (
        <h3 className="heading__text heading__text--subtitle">{subtitle}</h3>
      )}
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.string,
};

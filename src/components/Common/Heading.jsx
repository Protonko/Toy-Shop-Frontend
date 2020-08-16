import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({title, subtitle}) => {
  return (
    <div className="heading">
      <h2 className="heading__text headinh__text--title">{title}</h2>
      {subtitle && (
        <h3 className="heading__text heading__text--subtitle">{subtitle}</h3>
      )}
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

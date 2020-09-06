import React from 'react';
import PropTypes from 'prop-types';
import {SocialsItem} from './SocialsItem';

export const Socials = ({data}) => {
  const renderLink = (link, index) => (
    <SocialsItem key={index} {...link} />
  );

  return (
    <div className="socials">
      <ul className="socials__list list list--reset">
        {data.map(renderLink)}
      </ul>
    </div>
  )
};

Socials.propTypes = {
  data: PropTypes.array,
};

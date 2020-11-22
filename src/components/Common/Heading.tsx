// types
import {SIZES} from 'models/enums';
import {TValueOf} from 'models/types';

import React, {FC} from 'react';

interface IProps {
  title?: string,
  subtitle?: string,
  itemsLength?: number,
  size?: TValueOf<typeof SIZES>,
}

export const Heading: FC<IProps> = ({
  title,
  subtitle,
  itemsLength,
  size,
}) => {
  const modifier = size ?? 'md';
  const description = itemsLength ? `${itemsLength} items` : subtitle;

  return (
    <div className={`heading heading--${modifier}`}>
      <h2 className="heading__text heading__text--title">{title}</h2>
      {subtitle && (
        <h3 className="heading__text heading__text--subtitle">{description}</h3>
      )}
    </div>
  )
}

Heading.defaultProps = {
  size: SIZES.MEDIUM,
};

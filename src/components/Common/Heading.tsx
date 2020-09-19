import React, {FC} from 'react';
import {SIZES} from 'typing/enums';

interface IHeadingProps {
  title?: string,
  subtitle?: string,
  size: typeof SIZES,
}

export const Heading: FC<IHeadingProps> = ({
  title,
  subtitle,
  size = SIZES.MEDIUM
}) => {
  const modifier = size ?? 'md';

  return (
    <div className={`heading heading--${modifier}`}>
      <h2 className="heading__text heading__text--title">{title}</h2>
      {subtitle && (
        <h3 className="heading__text heading__text--subtitle">{subtitle}</h3>
      )}
    </div>
  )
}

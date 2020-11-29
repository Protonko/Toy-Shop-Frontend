import React, {FC} from 'react';
import {ReactComponent as StarIcon} from 'assets/icons/logo.svg';

interface IProps {
  numberOfStars?: number,
}

export const Rating: FC<IProps> = ({numberOfStars = 5}) => {
  const starsData = new Array(numberOfStars);

  const renderStars = (_: any, index: number) => (
    <StarIcon key={index} />
  );

  return (
    <div className="rating">
      {starsData.map(renderStars)}
    </div>
  );
};

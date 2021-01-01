import React, {FC} from 'react';
import {ReactComponent as StarIcon} from 'assets/icons/star.svg';

interface IProps {
  numberOfStars?: number,
  rating: number,
}

const SIZE_STAR = 16;

export const Rating: FC<IProps> = ({numberOfStars = 5, rating}) => {
  const starsData = new Array(numberOfStars).fill('');
  const maxWidthContainer = SIZE_STAR * numberOfStars;
  const progress = `${(rating / numberOfStars) * 100}%`;

  const renderStars = (_: any, index: number) => (
    <div className="rating__item" key={index}>
      <StarIcon />
    </div>
  );

  return (
    <div className="rating" style={{width: maxWidthContainer}}>
      <div className="rating__row rating__row--filled" style={{width: progress}}>
        {starsData.map(renderStars)}
      </div>
      <div className="rating__row">
        {starsData.map(renderStars)}
      </div>
    </div>
  );
};

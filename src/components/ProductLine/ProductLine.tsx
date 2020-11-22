import React, {FC} from 'react';
import Dotdotdot from 'react-dotdotdot';
import placeholder from 'assets/images/placeholder.jpg';
import {Checkbox} from 'components/Common/Checkbox';

interface IProps {
  title: string,
  image?: string,
  price: number,
  checked?: boolean,
  onChange: () => void,
}

export const ProductLine: FC<IProps> = ({
  title,
  image,
  price,
  checked,
  onChange,
}) => {
  const picture = image ?? placeholder;

  return (
    <label className="product-line">
      <div className="product-line__info">
        <Checkbox checked={checked} onChange={onChange} />

        <div className="product-line__image" style={{backgroundImage: `url(${picture})`}}/>

        <Dotdotdot className="product-line__truncate" clamp={2}>
          <div className="product-line__title">{title}</div>
        </Dotdotdot>
      </div>

      <p className="product-line__price">
        ${price}
      </p>
    </label>
  )
}

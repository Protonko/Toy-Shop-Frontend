import React, {FC} from 'react';
import Dotdotdot from 'react-dotdotdot';
import {Checkbox} from 'components/Common/Checkbox';

interface IProductLineProps {
  title: string,
  image: string,
  price: number,
  checked?: boolean,
  onChange: () => any, // TODO - убрать
}

export const ProductLine: FC<IProductLineProps> = ({
  title,
  image,
  price,
  checked,
  onChange,
}) => {
  return (
    <label className="product-line">
      <div className="product-line__info">
        <Checkbox checked={checked} onChange={onChange} />

        <div className="product-line__image" style={{backgroundImage: `url(${image})`} }/>

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

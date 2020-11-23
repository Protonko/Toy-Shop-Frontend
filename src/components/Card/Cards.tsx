import React, {FC} from 'react';
import {IProduct} from 'models/interfaces';
import {Card} from 'components/Card/Card';

export interface IProps {
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
}

export const Cards: FC<IProps> = ({
  products,
  selectedProducts,
  addToCart,
  removeFromCart
}) => {
  const renderCard = (product: IProduct) => (
    <li key={product.id} className="cards__item">
      <Card
        product={product}
        selectedProducts={selectedProducts}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </li>
  );

  return (
    <div className="cards">
      <ul className="cards__list list list--reset">
        {products.map(renderCard)}
      </ul>
    </div>
  );
}

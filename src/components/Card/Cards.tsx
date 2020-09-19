import React, {FC} from 'react';
import {Card} from 'components/Card/Card';
import {IProduct} from '../../typing/interfaces';

interface ICardsProps {
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
  addToCart: (product: IProduct) => any, // TODO - убрать
  removeFromCart: (product: IProduct) => any, // TODO - убрать
}

export const Cards: FC<ICardsProps> = ({
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

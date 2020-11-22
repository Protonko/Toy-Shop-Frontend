// types
import {IProduct} from 'models/interfaces';

import React, {FC} from 'react';
import {ProductLine} from './ProductLine';

interface IProductLinesProps {
  products: Array<IProduct>,
  toggleSelectProduct: (id: number | string) => void,
}

export const ProductLines: FC<IProductLinesProps> = ({
  products,
  toggleSelectProduct,
}) => {
  const renderProducts = (product: IProduct) => {
    const {title, price, image, checked} = product;

    return (
      <li className="product-lines__item" key={product.id}>
        <ProductLine
          title={title}
          price={price}
          image={image}
          checked={checked}
          onChange={() => toggleSelectProduct(product.id)}
        />
      </li>
    );
  }

  return (
    <div className="product-lines">
      <ul className="product-lines__list list list--reset">
        {products.map(renderProducts)}
      </ul>
    </div>
  );
};

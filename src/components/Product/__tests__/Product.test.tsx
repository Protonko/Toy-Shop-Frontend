// types
import {IProps} from 'components/Product/Product';

import React from 'react';
import {shallow} from 'enzyme';
import {product} from 'static/__test__/card';
import {Product} from 'components/Product/Product';

const PRICE_DEFAULT = 10;
const SALE = 0.5;
const PRICE_WITH_SALE = 5;
const PRICE_PRODUCT_VALUE = '$9';
const ELEMENT_SELECTORS = {
  price: 'product__data-price',
}

const shallowCardComponent = (props: IProps) => (
  shallow(<Product {...props} />)
);

describe('Product', () => {
  let props: IProps;
  let price: number;
  let sale: number | void;

  beforeEach(() => {
    props = {
      product,
      removeFromCart: () => {},
    };
    price = PRICE_DEFAULT;
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should price be PRICE_DEFAULT === 10', () => {
    const priceProduct = sale ? Math.round(price * sale) : price;

    expect(priceProduct).toBe(PRICE_DEFAULT);
  });

  it('Should return price with sale', () => {
    sale = SALE;
    const priceProduct = sale ? Math.round(price * sale) : price;

    expect(priceProduct).toBe(PRICE_WITH_SALE);
  });

  it('Should return price with sale', () => {
    const productComponent = shallowCardComponent(props);
    const productPrice = productComponent.find(`.${ELEMENT_SELECTORS.price}`);
    const priceValue = productPrice.text();

    expect(priceValue).toBe(PRICE_PRODUCT_VALUE);
  });
});

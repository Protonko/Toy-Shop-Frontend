// types
import {IProps} from 'components/Card/Card';
import {IProduct} from 'models/interfaces';

import React from 'react';
import {render, shallow} from 'enzyme';
import {product, product1, selectedProducts} from 'static/__test__/card';
import {Card} from 'components/Card/Card';

const shallowCardComponent = (props: IProps) => (
  shallow(<Card {...props} />)
)

describe('Card', () => {
  let props: IProps;
  let removeFromCart: jest.Mock<boolean, [IProduct]>;
  let addToCart: jest.Mock<boolean, [IProduct]>;
  let handleClickCartButton: jest.Mock<void, [IProduct, boolean]>;

  beforeEach(() => {
    props = {
      product,
      selectedProducts,
      addToCart: () => {},
      removeFromCart: () => {},
    };
    removeFromCart = jest.fn((product) => false);
    addToCart = jest.fn((product) => true);
    handleClickCartButton = jest.fn((product, isAdded) => {
      isAdded ? removeFromCart(product) : addToCart(product);
    })
  })

  it('Should render Card component', () => {
    const component = shallowCardComponent(props);
    const wrapper = component.find('.card');
    expect(wrapper.length).toBe(1);
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  })

  it('Should call function addToCart if array doesn\'t\n contains product', () => {
    props = {...props, selectedProducts: []};

    const isAdded = !!selectedProducts.find(
      (item: IProduct) => item.id === product1.id);

    handleClickCartButton(product, isAdded);

    expect(addToCart.mock.calls.length).toBe(1);
    expect(removeFromCart.mock.calls.length).toBe(0);
  });
});

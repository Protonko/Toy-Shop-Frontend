import React from 'react';
import {MemoryRouter} from 'react-router';
import {shallow} from 'enzyme';
import {products} from 'static/__test__/card';
import {Cart, IProps} from 'components/Cart/Cart';

const shallowCartComponent = (props: IProps, isRouter: boolean) => {
  if (isRouter) {
    return shallow(<MemoryRouter><Cart {...props} /></MemoryRouter>);
  } else {
    return shallow(<Cart {...props} />);
  }
}

describe('Cart', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      total: 1,
      countProducts: 1,
      items: products,
      removeFromCart: () => {},
    };
  });

  it('Match snapshot', () => {
    const component = shallowCartComponent(props, true);

    expect(component).toMatchSnapshot();
  });
});

// types
import {IProduct} from 'models/interfaces';

import React from 'react';
import {MemoryRouter} from 'react-router';
import {shallow, mount} from 'enzyme';
import {products} from 'static/__test__/card';
import {Cart, IProps} from 'components/Cart/Cart';
import {ButtonIconed} from '../../Common/Buttons/ButtonIconed';

const shallowCartComponent = (props: IProps) => (
  shallow(
    <Cart {...props} />
  )
);

describe('Cart', () => {
  let props: IProps;
  let popupVisible: boolean;

  beforeEach(() => {
    props = {
      total: 1,
      countProducts: 1,
      items: products,
      removeFromCart: (product) => {},
    };
    popupVisible = false;
  });

  it('Match snapshot', () => {
    const component = mount(<MemoryRouter><Cart {...props} /></MemoryRouter>);

    expect(component).toMatchSnapshot();
  });

  it('Should change state', () => {
    const component = mount(<Cart {...props} />);
    const button = component.find(ButtonIconed);
    button.simulate('click', {
      popupVisible: true,
    });

    expect(popupVisible).toBe(true);
  })
});

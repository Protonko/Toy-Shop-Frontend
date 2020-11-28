import React from 'react';
import {MemoryRouter} from 'react-router';
import {shallow, mount} from 'enzyme';
import {products} from 'static/__test__/card';
import {Cart, IProps} from 'components/Cart/Cart';
import {ButtonIconed} from 'components/Common/Buttons/ButtonIconed';

const shallowCartComponent = (props: IProps) => (
  shallow(
    <Cart {...props} />
  )
);

const mountCartComponent = (props: IProps, isRouter: boolean) => {
  if (isRouter) {
    return mount(<MemoryRouter><Cart {...props} /></MemoryRouter>);
  } else {
    return mount(<Cart {...props} />);
  }
}

describe('Cart', () => {
  let props: IProps;
  let popupVisible: boolean;

  beforeEach(() => {
    props = {
      total: 1,
      countProducts: 1,
      items: products,
      removeFromCart: () => {},
    };
    popupVisible = false;
  });

  it('Match snapshot', () => {
    const component = mountCartComponent(props, true);

    expect(component).toMatchSnapshot();
  });

  it('Should change state', () => {
    const component = mountCartComponent(props, false);
    const button = component.find(ButtonIconed);
    button.simulate('click', {
      popupVisible: true,
    });

    expect(popupVisible).toBe(true);
  })
});

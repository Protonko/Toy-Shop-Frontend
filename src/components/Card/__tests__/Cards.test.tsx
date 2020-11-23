// types
import {IProps} from 'components/Card/Cards';

import React from 'react';
import {MemoryRouter} from 'react-router';
import {render} from 'enzyme';
import {products, selectedProducts} from 'static/__test__/card';
import {Cards} from 'components/Card/Cards';

const renderCardsComponent = (props: IProps) => (
  render(
    <MemoryRouter initialEntries={['/']}>
      <Cards {...props} />
    </MemoryRouter>
  )
)

describe('Cards', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      products,
      selectedProducts,
      addToCart: () => {},
      removeFromCart: () => {},
    };
  });

  it('Match snapshot', () => {
    const component = renderCardsComponent(props);

    expect(component).toMatchSnapshot();
  });
})

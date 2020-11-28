import React from 'react';
import {MemoryRouter} from 'react-router';
import {render} from 'enzyme';
import {products, selectedProducts} from 'static/__test__/card';
import {Cards, IProps} from 'components/Card/Cards';

const renderCardsComponent = (props: IProps) => (
  render(
    <MemoryRouter initialEntries={['/']}>
      <Cards {...props} />
    </MemoryRouter>
  )
);

describe('Cards', () => {
  let props: IProps;
  let component: cheerio.Cheerio;

  beforeEach(() => {
    props = {
      products,
      selectedProducts,
      addToCart: () => {},
      removeFromCart: () => {},
    };
  });

  it('Match snapshot', () => {
    component = renderCardsComponent(props);

    expect(component).toMatchSnapshot();
  });
});

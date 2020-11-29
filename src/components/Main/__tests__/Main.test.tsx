import React from 'react';
import {shallow, mount} from 'enzyme';
import {products, selectedProducts} from 'static/__test__/card';
import {Main, IProps} from 'components/Main/Main';
import {Loader} from 'components/Common/Loader';

const ELEMENT_SELECTORS = {
  container: 'page__content-main',
  loader: Loader,
}

const shallowMainComponent = (props: IProps) => (
  shallow(<Main {...props} />)
);

const mountMainComponent = (props: IProps) => (
  mount(<Main {...props} />)
);

describe('Main', () => {
  let props: IProps;
  let componentWillUnmount: jest.Mock<string, []>;

  beforeEach(() => {
    props = {
      isLoaded: true,
      products,
      selectedProducts,
      setProducts: () => {},
      setSearchQuery: () => {},
      page: 0,
      errorMessage: null,
    };
    componentWillUnmount = jest.fn(() => '');
  });

  it('Match snapshot', () => {
    const component = shallowMainComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should render Main component', () => {
    const component = shallowMainComponent(props);
    const wrapper = component.find(`.${ELEMENT_SELECTORS.container}`);

    expect(wrapper.length).toBe(1);
  });

  it('Should render Loader if data did not load', () => {
    props = {...props, isLoaded: false};
    const component = mountMainComponent(props);
    const loader = component.find(ELEMENT_SELECTORS.loader);

    expect(loader.length).toBe(1);
  });

  it('Should reset search query on unmout', () => {
    expect(componentWillUnmount()).toBe('');
  });
});

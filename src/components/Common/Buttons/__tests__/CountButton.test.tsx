// types
import {IProps} from 'components/Common/Buttons/CountButton';

import React from 'react';
import {shallow} from 'enzyme';
import {ELEMENT_SELECTORS_BUTTON} from 'static/__test__/button';
import {CountButton} from 'components/Common/Buttons/CountButton';

const shallowCardComponent = (props: IProps) => (
  shallow(<CountButton {...props} />)
)

describe('CountButton', () => {
  let props: IProps;
  let fn: jest.Mock<void, []>;

  beforeEach(() => {
    fn = jest.fn(() => {});
    props = {
      onClick: fn,
      isMinus: true,
    };
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should add className "button--count-minus"', () => {
    const countButtonComponent = shallowCardComponent(props);
    const classNameButton = countButtonComponent
      .find(ELEMENT_SELECTORS_BUTTON.button)
      .hasClass(ELEMENT_SELECTORS_BUTTON.minusButton);

    expect(classNameButton).toEqual(true);
  });
});

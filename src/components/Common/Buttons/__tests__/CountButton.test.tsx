// types
import {TYPES_BUTTON} from 'models/enums';

import React from 'react';
import {shallow} from 'enzyme';
import {ELEMENT_SELECTORS_BUTTON} from 'static/__test__/button';
import {CountButton, IProps} from 'components/Common/Buttons/CountButton';

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

  it('Should render + if prop isMinus === false', () => {
    props = {...props, isMinus: false};
    const countButtonComponent = shallowCardComponent(props);
    const symbolButton = countButtonComponent
      .find(ELEMENT_SELECTORS_BUTTON.button)
      .prop(ELEMENT_SELECTORS_BUTTON.symbolAttr);

    expect(symbolButton).toBe('+');
  });

  it('Should type button be a "submit"', () => {
    props = {...props, type: TYPES_BUTTON.SUBMIT}
    const countButtonComponent = shallowCardComponent(props);
    const button = countButtonComponent.find(ELEMENT_SELECTORS_BUTTON.button);

    expect(button.prop('type')).toEqual(TYPES_BUTTON.SUBMIT);
  });
});

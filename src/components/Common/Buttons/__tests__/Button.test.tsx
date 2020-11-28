// types
import {IProps} from 'components/Common/Buttons/Button';

import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'components/Common/Buttons/Button';

const ELEMENT_SELECTORS = {
  button: 'button',
  testButton: 'test-button',
}

const shallowCardComponent = (props: IProps) => (
  shallow(<Button {...props} />)
)

describe('Button', () => {
  let props: IProps;
  let fn: jest.Mock<void, []>;

  beforeEach(() => {
    fn = jest.fn(() => {});
    props = {
      title: 'Test',
      onClick: fn,
    }
  });

  it('Should call fn onClick', () => {
    const buttonComponent = shallowCardComponent(props);
    const button = buttonComponent.find(ELEMENT_SELECTORS.button);

    button.simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });

  it('Should add className "test-button"', () => {
    props = {...props, classNamesAdditional: [ELEMENT_SELECTORS.testButton]}
    const buttonComponent = shallowCardComponent(props);
    const classNameButton = buttonComponent
      .find(ELEMENT_SELECTORS.button)
      .hasClass(ELEMENT_SELECTORS.testButton);

    expect(classNameButton).toEqual(true);
  });
})

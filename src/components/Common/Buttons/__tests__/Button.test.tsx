import React from 'react';
import {shallow} from 'enzyme';
import {ELEMENT_SELECTORS_BUTTON} from 'static/__test__/button';
import {Button, IProps} from 'components/Common/Buttons/Button';

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
    };
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should call fn onClick', () => {
    const buttonComponent = shallowCardComponent(props);
    const button = buttonComponent.find(ELEMENT_SELECTORS_BUTTON.button);

    button.simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });

  it('Should add className "test-button"', () => {
    props = {...props, classNamesAdditional: [ELEMENT_SELECTORS_BUTTON.testButton]}
    const buttonComponent = shallowCardComponent(props);
    const classNameButton = buttonComponent
      .find(ELEMENT_SELECTORS_BUTTON.button)
      .hasClass(ELEMENT_SELECTORS_BUTTON.testButton);

    expect(classNameButton).toEqual(true);
  });
});

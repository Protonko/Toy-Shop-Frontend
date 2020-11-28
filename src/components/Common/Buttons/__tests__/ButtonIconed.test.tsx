import React from 'react';
import {shallow} from 'enzyme';
import {ELEMENT_SELECTORS_BUTTON} from 'static/__test__/button';
import {ButtonIconed, IProps} from 'components/Common/Buttons/ButtonIconed';

const shallowCardComponent = (props: IProps) => (
  shallow(<ButtonIconed {...props} />)
)

describe('ButtonIconed', () => {
  let props: IProps;
  let fn: jest.Mock<void, []>;

  beforeEach(() => {
    fn = jest.fn(() => {});
    props = {
      children: <div />,
      onClick: fn,
    }
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should add className "test-button"', () => {
    props = {...props, classNamesAdditional: [ELEMENT_SELECTORS_BUTTON.testButton]}
    const buttonIconedComponent = shallowCardComponent(props);
    const classNameButton = buttonIconedComponent
      .find(ELEMENT_SELECTORS_BUTTON.button)
      .hasClass(ELEMENT_SELECTORS_BUTTON.testButton);

    expect(classNameButton).toEqual(true);
  });
});

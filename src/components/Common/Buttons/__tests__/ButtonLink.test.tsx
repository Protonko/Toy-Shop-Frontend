// types
import {TYPES_BUTTON} from 'models/enums';

import React from 'react';
import {shallow} from 'enzyme';
import {ELEMENT_SELECTORS_BUTTON} from 'static/__test__/button';
import {ButtonLink, IProps} from 'components/Common/Buttons/ButtonLink';

const shallowCardComponent = (props: IProps) => (
  shallow(<ButtonLink {...props} />)
)

describe('ButtonLink', () => {
  let props: IProps;
  let fn: jest.Mock<void, []>;

  beforeEach(() => {
    fn = jest.fn(() => {});
    props = {
      text: 'Test',
      onClick: fn,
    };
  });

  it('Match snapshot', () => {
    const component = shallowCardComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('Should add className "test-button"', () => {
    props = {...props, classNamesAdditional: [ELEMENT_SELECTORS_BUTTON.testButton]}
    const buttonLinkComponent = shallowCardComponent(props);
    const classNameButton = buttonLinkComponent
      .find(ELEMENT_SELECTORS_BUTTON.button)
      .hasClass(ELEMENT_SELECTORS_BUTTON.testButton);

    expect(classNameButton).toEqual(true);
  });

  it('Should type button be a "submit"', () => {
    props = {...props, type: TYPES_BUTTON.SUBMIT}
    const buttonLinkComponent = shallowCardComponent(props);
    const button = buttonLinkComponent.find(ELEMENT_SELECTORS_BUTTON.button);

    expect(button.prop('type')).toEqual(TYPES_BUTTON.SUBMIT);
  });
});

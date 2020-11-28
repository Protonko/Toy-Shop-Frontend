// types
import {IInputs, IButtons} from './checkoutData';
import {SIZES} from 'models/enums';
import {TTransitionClassnames} from 'models/types';

import React, {FC, useRef} from 'react';
import {Transition} from 'react-transition-group';
import classNames from 'classnames';
import {INPUTS_CHECKOUT, BUTTONS_CHECKOUT} from './checkoutData';
import {TRANSITION_DURATION_LONG} from 'static';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Heading} from 'components/Common/Heading';
import {Button} from 'components/Common/Buttons/Button';
import {CheckoutInput} from './CheckoutInput';

interface IProps {
  modalVisibility: boolean,
  toggleVisibilityModal: (visibility: boolean) => void,
}

const TRANSITION_CLASSNAMES: TTransitionClassnames = {
  entering: 'checkout--fade-in',
  entered: '',
  exiting: 'checkout--fade-out',
  exited: '',
  unmounted: '',
}

export const Checkout: FC<IProps> = ({modalVisibility, toggleVisibilityModal}) => {
  const modal = useRef<HTMLElement>(null);
  const renderInputs = (elem: IInputs) => {
    return (
      <li className="checkout__input" key={elem.id}>
        <CheckoutInput
          placeholder={elem.placeholder}
          label={elem.label}
        />
      </li>
    )
  };

  const renderButtons = (elem: IButtons) => {
    return (
      <li className="checkout__button">
        <Button title={elem.title} onClick={elem.onPress} />
      </li>
    )
  }

  useOutsideClick<HTMLElement>(modal, () => toggleVisibilityModal(false));

  return (
    <Transition
      in={modalVisibility}
      timeout={TRANSITION_DURATION_LONG}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => {
        const classNamesModal = classNames(
          'checkout',
          {[TRANSITION_CLASSNAMES[state]]: !!TRANSITION_CLASSNAMES[state]}
        );

        return (
          <form className={classNamesModal}>
            <article className="checkout__popup" ref={modal}>
              <header className="checkout__section checkout__section--header">
                <Heading title="Shopping cart" size={SIZES.MEDIUM} />
              </header>
              <div className="checkout__section checkout__section--body">
                <ul className="checkout__inputs list list--reset">
                  {INPUTS_CHECKOUT.map(renderInputs)}
                </ul>
              </div>
              <footer className="checkout__section checkout__section--footer">
                <ul className="checkout__buttons list list--reset">
                  {BUTTONS_CHECKOUT.map(renderButtons)}
                </ul>
              </footer>
            </article>
          </form>
        )
      }}
    </Transition>
  )
};

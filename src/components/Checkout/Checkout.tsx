// types
import {IInputs} from './checkoutData';
import {SIZES} from 'models/enums';
import {TTransitionClassnames} from 'models/types';

import React, {FC, useState, useRef} from 'react';
import {Transition} from 'react-transition-group';
import classNames from 'classnames';
import {INPUTS_CHECKOUT} from './checkoutData';
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
  const [formValues, setFormValues] = useState<Record<string, string>>({
    phone: '',
    city: '',
    name: '',
    email: '',
    comment: '',
  });

  const submitForm = () => {
    let canSubmit = true;

    for (let key in formValues) {
      if (formValues.hasOwnProperty(key) && !formValues[key]) {
        canSubmit = false;
        break;
      }
    }

    if (canSubmit) {
      toggleVisibilityModal(false);
    } else {
      alert('You should fill in all fields');
    }
  }
  const renderInputs = (elem: IInputs) => {
    return (
      <li className="checkout__input" key={elem.id}>
        <CheckoutInput
          name={elem.name}
          placeholder={elem.placeholder}
          label={elem.label}
          onChange={(value, name) => setFormValues({
            ...formValues,
            [name]: value,
          })}
        />
      </li>
    )
  };

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
                <Heading title="Checkout" size={SIZES.MEDIUM} />
              </header>
              <div className="checkout__section checkout__section--body">
                <ul className="checkout__inputs list list--reset">
                  {INPUTS_CHECKOUT.map(renderInputs)}
                </ul>
              </div>
              <footer className="checkout__section checkout__section--footer">
                <ul className="checkout__buttons list list--reset">
                  <li className="checkout__button">
                    <Button title="Checkout" onClick={submitForm} />
                  </li>
                </ul>
              </footer>
            </article>
          </form>
        )
      }}
    </Transition>
  )
};

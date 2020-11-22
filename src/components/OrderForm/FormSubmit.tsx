import React, {FC} from 'react';
import {Button} from 'components/Common/Buttons/Button';

interface IFormSubmitProps {
  text: string,
  onClick: () => void,
}

export const FormSubmit: FC<IFormSubmitProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className="order__submit">
      <ul className="order__submit-list list list--reset">
        <li className="order__submit-item">
          <div className="order__submit-text">{text}</div>
        </li>

        <li className="order__submit-item">
          <Button
            title="Checkout"
            classNamesAdditional={['order__submit-button']}
            onClick={onClick}
          />
        </li>
      </ul>
    </div>
  );
}

// types
import {TOGGLE_SELECT_TYPES} from 'models/enums';

import React, {FC, useState} from 'react';
import {Checkbox} from 'components/Common/Checkbox';
import {ButtonLink} from 'components/Common/Buttons/ButtonLink';

type TToggleSelectProduct = TOGGLE_SELECT_TYPES.REMOVE | TOGGLE_SELECT_TYPES.SELECT;

interface IFormHeaderProps {
  toggleSelectProduct: (type: TToggleSelectProduct) => void,
  onClick: () => void,
}

export const FormHeader: FC<IFormHeaderProps> = ({
  toggleSelectProduct,
  onClick,
}) => {
  const [checked, setChecked] = useState<boolean>(true);
  const toggleSelectAll = () => {
    setChecked(!checked);
    toggleSelectProduct(
      checked
        ? TOGGLE_SELECT_TYPES.REMOVE
        : TOGGLE_SELECT_TYPES.REMOVE
    );
  }

  return (
    <div className="order__section order__section--header order__box">
      <Checkbox text="Select all" onChange={toggleSelectAll} checked={checked} />
      <ButtonLink text="Delete selected" onClick={onClick} isRemoved={true} />
    </div>
  )
}

import React, {FC, useState} from 'react';
import {Checkbox} from 'components/Common/Checkbox';
import {ButtonLink} from 'components/Common/Buttons/ButtonLink';

// tmp
enum TYPES_SELECT_PRODUCT {
  REMOVE = 'remove',
  SELECT = 'select'
}

// tmp
type TToggleSelectProduct = TYPES_SELECT_PRODUCT.REMOVE | TYPES_SELECT_PRODUCT.SELECT;

interface IFormHeaderProps {
  toggleSelectProduct: (type: TToggleSelectProduct) => any, // TODO - убрать
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
        ? TYPES_SELECT_PRODUCT.REMOVE
        : TYPES_SELECT_PRODUCT.REMOVE
    );
  }

  return (
    <div className="order__section order__section--header order__box">
      <Checkbox text="Select all" onChange={toggleSelectAll} checked={checked} />
      <ButtonLink text="Delete selected" onClick={onClick} isRemoved={true} />
    </div>
  )
}

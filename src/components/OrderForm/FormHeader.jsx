import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'components/Common/Checkbox';
import {ButtonLink} from 'components/Common/Buttons/ButtonLink';

export const FormHeader = ({toggleSelectProduct, onClick}) => {
  const [checked, setChecked] = useState(true);
  const toggleSelectAll = () => {
    setChecked(!checked);
    toggleSelectProduct(checked ? 'remove' : 'select');
  }

  return (
    <div className="order__section order__section--header order__box">
      <Checkbox text="Select all" onChange={toggleSelectAll} checked={checked} />
      <ButtonLink text="Delete selected" onClick={onClick} isRemoved={true} />
    </div>
  )
}

FormHeader.propTypes = {
  toggleSelectProduct: PropTypes.func,
  onClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'components/Common/Checkbox';
import {ButtonLink} from 'components/Common/Buttons/ButtonLink';

export const FormHeader = ({onChange, onClick}) => {
  return (
    <div className="order__section order__section--header order__box">
      <Checkbox text="Select all" onChange={onChange} checked={true} />
      <ButtonLink text="Delete selected" onClick={onClick} isRemoved={true} />
    </div>
  )
}

FormHeader.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

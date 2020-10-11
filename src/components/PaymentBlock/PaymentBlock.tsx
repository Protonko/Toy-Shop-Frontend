import React, {FC} from 'react';

interface IPaymentBlockProps {
  id: string,
  title: string,
  description: string,
  image?: string,
}

export const PaymentBlock: FC<IPaymentBlockProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="payment__block">
      <h2 className="payment__block-title">{title}</h2>
      <p className="payment__block-description">{description}</p>
      {image && (
        <div className="payment__block-image">
          <img src={image} alt={title} className="payment__block-image-pic" />
        </div>
      )}
    </div>
  );
};

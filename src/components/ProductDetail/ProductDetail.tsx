// types
import {IImageThumbnails, IProductDetail} from 'models/interfaces';

import React, {FC} from 'react';
import ImageGallery from 'react-image-gallery';
import placeholder from 'assets/images/placeholder.jpg';
import {DottedLine} from 'components/Common/DottedLine/DottedLine';
import {OrderBlock} from 'components/OrderBlock/OrderBlock';

interface IProps {
  detail: IProductDetail | null,
  images: Array<IImageThumbnails> | null,
}

export const ProductDetail: FC<IProps> = ({
  detail,
  images,
}) => {
  const {title, about, description} = detail ?? {};

  const ImageComponent = () => {
    if (images) {
      return (
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
        />
      )
    } else {
      return <img src={placeholder} alt="placeholder"/>
    }
  }

  if (description) {
    return (
      <>
        <div className="product-content__main">
          <div className="product-content__detail">
            <div className="product-content__carousel">
              <ImageComponent />
            </div>
            <div className="product-content__info">
              <h2 className="product-content__info-title">{title}</h2>
              <DottedLine
                className="product-content__line"
                classesItem={['product-content__line-item']}
                items={description}
              />
            </div>
          </div>
          <div className="product-content__order">
            <OrderBlock />
          </div>
        </div>
        <div>
          {about}
        </div>
      </>
    );
  } else {
    return null;
  }
}

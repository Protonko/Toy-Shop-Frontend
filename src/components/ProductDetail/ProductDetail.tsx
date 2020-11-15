// types
import {IImageThumbnails, IProductDetail} from 'models/interfaces';

import React, {FC} from 'react';
import ImageGallery from 'react-image-gallery';
import placeholder from 'assets/images/placeholder.jpg';
import {Loader} from 'components/Common/Loader';
import {DottedLine} from 'components/Common/DottedLine/DottedLine';
import {OrderBlock} from 'components/OrderBlock/OrderBlock';

interface IProps {
  detail: IProductDetail | null,
  images: Array<IImageThumbnails> | null,
  isLoaded: boolean,
  errorMessage: string | null,
}

export const ProductDetail: FC<IProps> = ({
  detail,
  images,
  isLoaded,
  errorMessage,
}) => {
  const {title, about, description, price, sale} = detail ?? {};
  const productPrice = sale ? Math.round(price! * sale) : price;

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

  if (isLoaded) {
    if (detail) {
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
                  items={description ?? []}
                />
              </div>
            </div>
            <div className="product-content__order">
              <OrderBlock
                priceWithSale={productPrice!}
                price={price!}
                sale={!!sale}
                onClick={() => true}
              />
            </div>
          </div>
          <div className="product-content__description">
            {about}
          </div>
        </>
      );
    } else {
      return (
        <div>{errorMessage}</div>
      )
    }
  } else {
    return <Loader />;
  }
}

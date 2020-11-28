// types
import {IImageThumbnails, IProduct, IProductDetail} from 'models/interfaces';

import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import placeholder from 'assets/images/placeholder.jpg';
import {Loader} from 'components/Common/Loader';
import {ErrorMessage} from 'components/Common/ErrorMessage';
import {DottedLine} from 'components/Common/DottedLine/DottedLine';
import {OrderBlock} from 'components/OrderBlock/OrderBlock';

interface IRouteParams {
  id?: string,
}

interface IProps {
  detail: IProductDetail | null,
  images: Array<IImageThumbnails> | null,
  isLoadedDetail: boolean,
  errorDetailMessage: string | null,
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
  selectedProducts: Array<IProduct>,
  getProductDetail: (id: number) => void,
  refreshDetail: () => void,
}

export const ProductDetail: FC<IProps> = ({
  detail,
  images,
  isLoadedDetail,
  errorDetailMessage,
  addToCart,
  removeFromCart,
  selectedProducts,
  refreshDetail,
  getProductDetail,
}) => {
  const {id} = useParams<IRouteParams>();
  const {title, about, description, price, sale} = detail ?? {};
  const productPrice = sale ? Math.round(price! * sale) : price;
  const isAdded = !!selectedProducts.find(
    (item: IProduct) => item.id === detail?.id);
  const handlePressAddButton = () => {
    isAdded ? removeFromCart(detail!) : addToCart(detail!);
  }

  const refreshDetailPage = () => {
    if (id) {
      refreshDetail();
      getProductDetail(+id);
    }
  }

  useEffect(() => {
    if (id) {
      getProductDetail(+id);
    }

    return () => refreshDetail();
  }, []);

  const renderImageCarousel = () => {
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

  if (isLoadedDetail) {
    if (detail) {
      return (
        <>
          <div className="product-content__main">
            <div className="product-content__detail">
              <div className="product-content__carousel">
                {renderImageCarousel()}
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
                isAdded={isAdded}
                onClick={handlePressAddButton}
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
        <ErrorMessage
          message={errorDetailMessage ?? 'Error'}
          onClick={refreshDetailPage}
        />
      )
    }
  } else {
    return <Loader />;
  }
}

import React, {FC} from 'react';
import ImageGallery from 'react-image-gallery';
import {Description} from 'components/Common/Description/Description';
import {DottedLine} from 'components/Common/DottedLine/DottedLine';
import {OrderBlock} from 'components/OrderBlock/OrderBlock';

export const ProductDetail: FC = () => {
  const images = [ // tmp
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  const descriptionCard = [
    {
      id: '12',
      term: 'Manufacturer country',
      value: 'China',
      marked: false,
    },
    {
      id: '21',
      term: 'Manufacturer country',
      value: 'China',
      marked: false,
    },
  ];

  return (
    <>
      <div className="product-content__detail">
        <div className="product-content__carousel">
          <ImageGallery
            items={images}
            thumbnailPosition="left"
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
          />
        </div>
        <div className="product-content__info">
          <DottedLine
            className="product-content__line"
            classesItem={['product-content__line-item']}
            items={descriptionCard}
          />
        </div>
      </div>
      <div className="product-content__order">
        <OrderBlock />
      </div>
    </>
  );
}

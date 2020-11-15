// types
import {IProductDetail} from 'models/interfaces';

import {createSelector} from 'reselect';
import {getThumbnails} from 'utils/getThumbnails';

const getDetail = (productDetail: (IProductDetail | null)) => productDetail;

export const setImageThumbnails = createSelector(
  getDetail,
  productDetail => {
    const images = productDetail?.images;

    if (images) {
      return getThumbnails(images)
    } else {
      return null;
    }
  },
);

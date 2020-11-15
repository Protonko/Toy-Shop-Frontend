//types
import {TMerge} from 'models/types';
import {IImageThumbnails, IProductDetail} from 'models/interfaces';
import {TInitialState} from 'store/reducers/products';

import React, {FC, useEffect} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setImageThumbnails} from 'store/selectors/imageThumbnails';
import {useParams} from 'react-router-dom';
import * as productActions from 'store/actions/products';
import {ProductDetail} from 'components/ProductDetail/ProductDetail';

interface IRouteParams {
  id?: string,
}

type TState = {
  detail: IProductDetail | null,
  isLoadedDetail: boolean,
  errorDetailMessage: null | string,
  images: Array<IImageThumbnails> | null,
}

type TActions = {
  getProductDetail: (id: number) => void,
}

const mapStateToProps = ({products}: {products: TInitialState}): TState => ({
  detail: products.detail,
  isLoadedDetail: products.isLoadedDetail,
  errorDetailMessage: products.errorDetailMessage,
  images: setImageThumbnails(products.detail)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(productActions, dispatch)
})

const ProductDetailContainer: FC<TMerge<TState, TActions>> = ({
  detail,
  isLoadedDetail,
  errorDetailMessage,
  getProductDetail,
  images,
}) => {
  const {id} = useParams<IRouteParams>();

  useEffect(() => {
    if (id) {
      getProductDetail(+id);
    }
  }, []);

  return (
    <ProductDetail
      detail={detail}
      images={images}
      isLoaded={isLoadedDetail}
      errorMessage={errorDetailMessage}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);

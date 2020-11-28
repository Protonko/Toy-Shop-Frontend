// types
import {IDelivery, IError} from 'models/interfaces';
import {TAppThunk} from 'models/store';
import {IGetDataSuccess, IGetDataError} from 'models/store/actions/delivery';

import keyMirror from 'utils/keyMirror';
import {DeliveryApi} from 'classes/Api/Delivery';

const PREFIX = '[DELIVERY]';

export const ACTIONS = keyMirror([
  'GET_DATA_SUCCESS',
  'GET_DATA_ERROR',
], PREFIX);

const getDataSuccess = (payload: Array<IDelivery>): IGetDataSuccess =>
  ({type: ACTIONS.GET_DATA_SUCCESS, payload});

const getDataError = (payload: string): IGetDataError =>
  ({type: ACTIONS.GET_DATA_ERROR, payload});

export const getDelivery = (): TAppThunk =>
  dispatch =>
    DeliveryApi.getData().then(
      response => dispatch(getDataSuccess(response)),
      (error: IError) => dispatch(getDataError(error.message)),
    );

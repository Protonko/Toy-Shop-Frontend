// types
import {IPayment, IError} from 'models/interfaces';
import {TAppThunk} from 'models/store';
import {IGetDataSuccess, IGetDataError} from 'models/store/actions/payment';

import keyMirror from 'utils/keyMirror';
import {PaymentApi} from 'classes/Api/Payment';

const PREFIX = '[PAYMENT]';

export const ACTIONS = keyMirror([
  'GET_DATA_SUCCESS',
  'GET_DATA_ERROR',
], PREFIX);

const getDataSuccess = (payload: Array<IPayment>): IGetDataSuccess =>
  ({type: ACTIONS.GET_DATA_SUCCESS, payload});

const getDataError = (payload: string): IGetDataError =>
  ({type: ACTIONS.GET_DATA_ERROR, payload});

export const getPayment = (): TAppThunk =>
  dispatch =>
    PaymentApi.getData().then(
      response => dispatch(getDataSuccess(response)),
      (error: IError) => dispatch(getDataError(error.message)),
    );

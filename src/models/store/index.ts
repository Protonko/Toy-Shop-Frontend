import {RootState} from 'store/reducers';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

export type TAppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >

export type TAppAction<T, U = any> = {
  type: T,
  payload: U,
}

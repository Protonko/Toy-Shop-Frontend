import {ACTIONS} from 'store/actions/checkout';

export type TActionsCheckout =
  | typeof ACTIONS.TOGGLE_VISIBILITY_MODAL;

export interface IToggleVisibilityModal {
  type: typeof ACTIONS.TOGGLE_VISIBILITY_MODAL,
  payload: boolean,
}

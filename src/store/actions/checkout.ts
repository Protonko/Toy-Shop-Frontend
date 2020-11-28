// types
import {IToggleVisibilityModal} from 'models/store/actions/checkout';

import keyMirror from 'utils/keyMirror';

const PREFIX = '[CHECKOUT]';

export const ACTIONS = keyMirror(['TOGGLE_VISIBILITY_MODAL'], PREFIX);

export const toggleVisibilityModal = (payload: boolean): IToggleVisibilityModal =>
  ({type: ACTIONS.TOGGLE_VISIBILITY_MODAL, payload});

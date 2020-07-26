import { types } from '../_types/action-strings';
import { HeadActionTypes } from '../_types/actions';

export const changeState = (sstate: string): HeadActionTypes => ({
    type: types.CHANGE_SSTATE,
    payload: sstate
});

export const chageSmth = (color: string): HeadActionTypes => ({
    type: types.CHANGE_COLOR,
    payload: color
});

import { types } from '../_types/action-strings';
import { AppState } from '../_store/storeConf';
import { HeadActionTypes } from "../_types/actions";

const initialState: IState = {
    sstate: 'string',
    color: 'red',
};

interface IState {
    sstate: string,
    color: string
}

export default (state: IState = initialState, action: HeadActionTypes): AppState => {
    switch (action.type) {
        case types.CHANGE_SSTATE:
            return {
                ...state,
                sstate: action.payload
            };
        case types.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            };

        default:
            return state;
    }
};

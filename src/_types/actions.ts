import { types } from "./action-strings";

export interface changeState {
    type: typeof types.CHANGE_SSTATE;
    payload: string
}

export interface changeColor {
    type: typeof types.CHANGE_COLOR;
    payload: string
}

export type HeadActionTypes = changeState | changeColor;

export type AppActions = HeadActionTypes;
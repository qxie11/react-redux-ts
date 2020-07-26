import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import headReducer from '../_reducers/head';
import { AppActions } from "../_types/actions";

const rootReducer: any = combineReducers({
  head: headReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)); 
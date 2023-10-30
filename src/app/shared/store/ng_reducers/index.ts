import { ActionReducerMap } from '@ngrx/store';
import { StuffState, stuffReducer } from './stuff.reducers';
export interface ProductsState {
  stuffs: StuffState;
}

export const reducers = {
  stuffs: stuffReducer,
};

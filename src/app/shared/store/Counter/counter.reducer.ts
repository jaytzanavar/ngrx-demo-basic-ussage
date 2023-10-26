import { createReducer, on } from '@ngrx/store';
import { initState } from './counter.state';
import {
  customIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';

const _counterReducer = createReducer(
  initState,
  on(increment, (state) => {
    console.log(state);
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter:
        action.action === 'add'
          ? Number(state.counter) + Number(action.value)
          : Number(state.counter) - Number(action.value),
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

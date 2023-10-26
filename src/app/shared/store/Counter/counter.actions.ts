import { createAction, props } from '@ngrx/store';

export const increment = createAction('INCREMENT_COUNTER');
export const decrement = createAction('DECREMENT_COUNTER');
export const reset = createAction('RESET_COUNTER');
export const customIncrement = createAction(
  'CUSTOM_INCREMENT',
  props<{ value: number; action: string }>()
);

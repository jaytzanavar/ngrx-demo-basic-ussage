import { Action } from '@ngrx/store';

export const LOAD_STUFF = '[Products] Load STUFF';
export const LOAD_STUFF_FAIL = '[Products] Load stuff Fail';
export const LOAD_STUFF_SUCCESS = '[Products] Load stuff suceess';

export class LoadStuff implements Action {
  readonly type = LOAD_STUFF;
}

export class LoadStuffFail implements Action {
  readonly type = LOAD_STUFF_FAIL;
  constructor(public payload: any) {}
}

export class LoadStuffSucces implements Action {
  readonly type = LOAD_STUFF_SUCCESS;
  constructor(public payload: any) {}
}

export type StuffActions = LoadStuff | LoadStuffFail | LoadStuffSucces;

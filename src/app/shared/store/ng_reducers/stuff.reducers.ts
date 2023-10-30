import { createReducer, on } from '@ngrx/store';
import { Stuff } from '../../models/stuffModel';
import {
  LoadStuffSucces,
  loadStuff,
  loadStuffFail,
} from '../ng_actions/stuff.actions';
import { loadBlogSucess } from '../Blog/blog.action';

export interface StuffState {
  data: Stuff[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
  loaded: false,
  loading: false,
};

export const _stuffReducer = createReducer(
  initialState,
  on(loadStuff, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  on(loadStuffFail, (state) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),
  on(loadBlogSucess, (state) => {
    return {
      ...state,
      loading: false,
      loaded: true,
    };
  })
);

export function stuffReducer(state: any, action: any) {
  return _stuffReducer(state, action);
}
//     case LOAD_STUFF_FAIL: {
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//       };
//     }
//     case LOAD_STUFF_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//       };
//     }
//     default:
//   }
//   return state;

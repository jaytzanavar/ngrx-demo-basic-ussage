import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from './PostStateInterface';
import { getPost } from './Post.action';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducers = createReducer(
  initialState,
  on(getPost, (state) => ({
    ...state,
    isLoading: true,
  }))
);

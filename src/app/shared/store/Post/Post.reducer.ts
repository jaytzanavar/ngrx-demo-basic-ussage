import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from './PostStateInterface';
import { getPost, getPostFailure, getPostSuccess } from './Post.action';

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
  })),
  on(getPostSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(getPostFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

import { PostStateInterface } from './PostStateInterface';
import { PostInterface } from './../../models/PostsModel';
import { AppStateModel } from '../Global/AppState.Model';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateModel) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

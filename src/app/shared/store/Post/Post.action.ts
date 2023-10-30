import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../../models/PostsModel';

export const getPost = createAction('[Posts] Get Posts');
export const getPostSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostInterface[] }>()
);
export const getPostFailure = createAction(
  '[Posts] Get Posts failed',
  props<{ error: string }>()
);

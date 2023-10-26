import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG = '[blog page] load blog';
export const loadBlogSucess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ blogInput: BlogModel[] }>()
);

export const loadBlog = createAction(LOAD_BLOG);
export const addblog = createAction(
  'ADDBLOG',
  props<{ blogInput: BlogModel }>()
);
export const updateblog = createAction(
  'UPDATEBLOG',
  props<{ blogInput: BlogModel }>()
);
export const deleteblog = createAction(
  'DELETEBLOG',
  props<{ blogId: Number }>()
);

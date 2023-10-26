import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { createAction, props } from '@ngrx/store';

export const loadblog = createAction('LOADBLOG');
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

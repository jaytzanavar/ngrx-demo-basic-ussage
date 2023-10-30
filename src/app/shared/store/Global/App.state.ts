import { blogReducer } from '../Blog/blog.reducer';
import { counterReducer } from '../Counter/counter.reducer';
import { postReducers } from '../Post/Post.reducer';
import { stuffReducer } from '../ng_reducers/stuff.reducers';

export const AppGlobalState = {
  counter: counterReducer,
  blog: blogReducer,
  stuff: stuffReducer,
  posts: postReducers,
};

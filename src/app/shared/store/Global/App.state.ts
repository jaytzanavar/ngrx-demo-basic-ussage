import { blogReducer } from '../Blog/blog.reducer';
import { counterReducer } from '../Counter/counter.reducer';

export const AppGlobalState = {
  counter: counterReducer,
  blog: blogReducer,
};

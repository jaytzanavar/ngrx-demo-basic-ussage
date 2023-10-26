import { createReducer, on } from '@ngrx/store';
import { initBlogState } from './blog.state';
import {
  addblog,
  deleteblog,
  loadBlog,
  loadBlogSucess,
  updateblog,
} from './blog.action';

const _blogReducer = createReducer(
  initBlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(loadBlogSucess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogInput],
    };
  }),
  on(addblog, (state, action) => {
    const blog = { ...action.blogInput };
    blog.id = state.blogList.length + 1;
    console.log(state);
    console.log(blog);
    return {
      ...state,
      blogList: [...state.blogList, blog],
    };
  }),
  on(updateblog, (state, action) => {
    const blog = { ...action.blogInput };
    const updateBlog = state.blogList.map((blogIt) => {
      return blog.id === blogIt.id ? blog : blogIt;
    });

    return {
      ...state,
      blogList: [...updateBlog],
    };
  }),
  on(deleteblog, (state, action) => {
    const newBList = state.blogList.filter((b) => b.id !== action.blogId);
    return {
      ...state,
      blogList: [...newBList],
    };
  }),
  on(loadBlog, (state, action) => {
    return {
      ...state,
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}

import { PostStateInterface } from './../Post/PostStateInterface';
import { CounterModel } from '../../models/CounterModel';
import { PostInterface } from '../../models/PostsModel';
import { BlogModel, Blogs } from '../Blog/Blog.model';

export interface AppStateModel {
  counter: CounterModel;
  blog: Blogs;
  posts: PostStateInterface;
}

import { CounterModel } from '../../models/CounterModel';
import { BlogModel, Blogs } from '../Blog/Blog.model';

export interface AppStateModel {
  counter: CounterModel;
  blog: Blogs;
}

import { PostStateInterface } from './PostStateInterface';
import { PostInterface } from './../../models/PostsModel';
import { AppStateModel } from '../Global/AppState.Model';

export const selectFeature = (state: AppStateModel) => state.posts;

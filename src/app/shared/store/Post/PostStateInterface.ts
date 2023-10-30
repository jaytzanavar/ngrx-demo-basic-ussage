import { PostInterface } from '../../models/PostsModel';

export interface PostStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}

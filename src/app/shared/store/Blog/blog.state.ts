import { BlogModel, Blogs } from './Blog.model';

export const initBlogState: Blogs = {
  blogList: [
    {
      id: 0,
      title: 'Angular',
      description: 'Char char',
    },
    {
      id: 1,
      title: 'React',
      description: 'Squirtle',
    },
    {
      id: 2,
      title: 'Vue',
      description: 'Bulba',
    },
  ],
};

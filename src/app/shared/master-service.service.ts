import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from './store/Blog/Blog.model';
import { PostInterface } from './models/PostsModel';

@Injectable({
  providedIn: 'root',
})
export class MasterServiceService {
  constructor(private http: HttpClient) {}

  haveAccess() {
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>('http://localhost:3000/Blogs');
  }

  getAllPosts(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>('http://localhost:3000/Posts');
  }
}

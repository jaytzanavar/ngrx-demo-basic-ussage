import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from './store/Blog/Blog.model';

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
}

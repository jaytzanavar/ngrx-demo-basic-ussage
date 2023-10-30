import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/shared/models/PostsModel';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { getPost } from 'src/app/shared/store/Post/Post.action';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from 'src/app/shared/store/Post/Post.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<PostInterface[]>;
  error$: Observable<string | null>;
  constructor(private store: Store<AppStateModel>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPost());
  }
}

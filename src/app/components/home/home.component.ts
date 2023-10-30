import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPost } from 'src/app/shared/store/Post/Post.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPost());
  }
}

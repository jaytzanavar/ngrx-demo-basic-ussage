import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPost, getPostFailure, getPostSuccess } from './Post.action';
import { map, mergeMap, catchError, of } from 'rxjs';
import { MasterServiceService } from '../../master-service.service';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      mergeMap(() => {
        return this.postsService.getAllPosts().pipe(
          map((post) => getPostSuccess({ posts: post })),
          catchError((error) => of(getPostFailure({ error: error.message })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private postsService: MasterServiceService
  ) {}
}

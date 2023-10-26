import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterServiceService } from '../../master-service.service';
import { LOAD_BLOG, loadBlogSucess } from './blog.action';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class BlogEffects {
  constructor(
    private action$: Actions,
    private service: MasterServiceService
  ) {}

  _blog = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.GetAllBlogs().pipe(
          map(
            (data) =>
              loadBlogSucess({
                blogInput: data,
              }),
            catchError(() => EMPTY)
          )
        );
      })
    )
  );
}

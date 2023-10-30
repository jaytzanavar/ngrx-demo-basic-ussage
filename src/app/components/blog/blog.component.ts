import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getBlog } from 'src/app/shared/store/Blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { BlogAddComponent } from '../blog-add/blog-add.component';
import { deleteblog, loadBlog } from 'src/app/shared/store/Blog/blog.action';
import { MasterServiceService } from 'src/app/shared/master-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogList: BlogModel[] = [];
  /**
   *
   */
  constructor(
    private store: Store<AppStateModel>,
    private dialog: MatDialog,
    private srv: MasterServiceService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadBlog());
    this.store.select(getBlog).subscribe((blog: any) => {
      this.blogList = blog;
    });
    this.srv.getAllPosts().subscribe((res) => console.log(res));
  }

  AddBlog(): void {
    this.OpenDialog(0, '', '', false);
  }

  OpenDialog(
    id: number,
    title: string,
    description: string,
    isEdit: boolean
  ): void {
    this.dialog.open(BlogAddComponent, {
      width: '40%',
      data: isEdit
        ? {
            id: id,
            title: title,
            description: description,
            isEdit: isEdit,
          }
        : {},
    });
  }

  update(item: BlogModel): void {
    this.OpenDialog(item.id, item.title, item.description, true);
  }

  delete(item: BlogModel): void {
    this.store.dispatch(deleteblog({ blogId: item.id }));
  }
}

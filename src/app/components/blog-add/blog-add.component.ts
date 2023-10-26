import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { addblog, updateblog } from 'src/app/shared/store/Blog/blog.action';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
})
export class BlogAddComponent {
  constructor(
    private dialogRef: MatDialogRef<BlogAddComponent>,
    private fb: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  bf = this.fb.group({
    id: this.fb.control(this.data.isEdit ? this.data.id : '0'),
    title: this.fb.control(this.data.isEdit ? this.data.title : '', [
      Validators.required,
      Validators.pattern('^[A-Z].*$'),
    ]),
    description: this.fb.control(
      this.data.description ? this.data.description : '',
      Validators.required
    ),
  });
  SaveBlog(): void {
    if (this.bf.valid) {
      const blogInput: BlogModel = {
        id: 0,
        title: this.bf.value.title as string,
        description: this.bf.value.description as any,
      };

      if (this.data.isEdit) {
        this.store.dispatch(updateblog({ blogInput: blogInput }));
      } else {
        this.store.dispatch(addblog({ blogInput: blogInput }));
      }
      this.Cancel();
    }
  }

  Cancel(): void {
    this.dialogRef.close();
  }
}

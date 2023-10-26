import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterWrapperComponent } from './components/counter-wrapper/counter-wrapper.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterWrapperComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DoeComponent } from './pages/doe/doe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'doe', component: DoeComponent },
];

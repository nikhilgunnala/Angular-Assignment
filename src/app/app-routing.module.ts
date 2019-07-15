import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch: 'full'},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'users/:id',component:UserComponent},
  {path:'posts/:id',component:PostComponent},
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

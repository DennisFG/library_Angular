import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent } from './books/rent/rent.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'books', component: BooksComponent, children: [
      // { path: 'rent', component: RentComponent },
    ]
  },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  // abaixo, inserir página com validação
  // {
  //   path: 'usuarios', canActivate: [AuthGuard], component: UsersComponent, children: [
  //     { path: ':id', component: UsersComponent },
  //     { path: ':id/edit', component: EditUserComponent }
  //   ]
  // },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

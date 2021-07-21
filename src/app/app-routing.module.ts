import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluguelComponent } from './books/aluguel/aluguel.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'books', component: BooksComponent, children: [
      { path: 'aluguel', component: AluguelComponent },
    ]
  },
  { path: 'user', component: UserComponent },
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

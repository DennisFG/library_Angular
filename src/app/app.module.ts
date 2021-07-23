import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { FormUserComponent } from './components/user/form-user/form-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RentComponent } from './components/books/rent/rent.component';
import { BtnCreateComponent } from './components/books/rent/btn-create/btn-create.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DeleteuserComponent } from './components/user/deleteuser/deleteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomePageComponent,
    UserComponent,
    FormUserComponent,
    PageNotFoundComponent,
    LoginComponent,
    RentComponent,
    BtnCreateComponent,
    EditUserComponent,
    DeleteuserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

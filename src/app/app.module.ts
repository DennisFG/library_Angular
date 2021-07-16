import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioClienteComponent } from './cliente/formulario-cliente/formulario-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClienteComponent,
    FormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminSystemComponent } from './adminSystem/adminSystem.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { AjoutComponent } from './ajout/ajout.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminSystemComponent,
      ListePartenaireComponent,
      AjoutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AngularMaterialModule } from './material/material.module';
import { DepotComponent } from './depot/depot.component';
import { TraitementComponent } from './traitement/traitement.component';




@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminSystemComponent,
      ListePartenaireComponent,
      AjoutComponent,
      UserComponent,
      DepotComponent,
      TraitementComponent
   ],
   imports: [
    AngularMaterialModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AngularMaterialModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

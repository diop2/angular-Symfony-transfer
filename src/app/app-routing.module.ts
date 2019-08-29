import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { AjoutComponent } from './ajout/ajout.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'listePartenaire', component: ListePartenaireComponent},
  {path: 'ajout', component: AjoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

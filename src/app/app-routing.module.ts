import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { AjoutComponent } from './ajout/ajout.component';
import { DepotComponent } from './depot/depot.component';
import { TraitementComponent } from './traitement/traitement.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'listePartenaire', component: ListePartenaireComponent},
  {path: 'ajout', component: AjoutComponent},
  {path: 'depot', component: DepotComponent },
  {path: 'traitement', component: TraitementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

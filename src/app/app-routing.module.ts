import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { GareEComponent } from './components/gare-e/gare-e.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:'', 
    component:HomeComponent
  },

  {
    path:'classifiche', 
    component:ClassificaComponent
  },

  {
    path:'contatti', 
    component:ContattiComponent
  },

  {
    path:'gare/:id', 
    component:GareEComponent
  },

  {
    path:'chisiamo', 
    component:ChisiamoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

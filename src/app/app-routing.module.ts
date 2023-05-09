import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { GareEComponent } from './components/gare-e/gare-e.component';
import { GareIComponent } from './components/gare-i/gare-i.component';

const routes: Routes = [
  {
    path:'classifiche', //se metto /classifiche o /classifiche/ non funziona
    component:ClassificaComponent
  },

  {
    path:'contatti', //se metto /classifiche o /classifiche/ non funziona
    component:GareIComponent 
  },

  {
    path:'gare', //se metto /classifiche o /classifiche/ non funziona
    component:GareEComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

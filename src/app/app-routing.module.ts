import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificaComponent } from './components/classifica/classifica.component';

const routes: Routes = [
  {
    path:'classifiche', //se metto /classifiche o /classifiche/ non funziona
    component:ClassificaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

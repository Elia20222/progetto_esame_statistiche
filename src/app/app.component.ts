import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data: any

  dataevento(d:any){
    console.log('il nuovo anno ' + d)
    this.data = d
  }
}

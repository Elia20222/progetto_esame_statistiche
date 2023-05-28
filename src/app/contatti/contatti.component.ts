import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PopupcandidaturaComponent } from '../components/popupcandidatura/popupcandidatura.component';
@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit{

  data: any
  form:  any
  name:  string | undefined
  surname:  string | undefined
  email:  string | undefined
  message:  string | undefined
  linkcontatto: any
  dati: any
  
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reactive: ReactiveFormsModule,
    private api:  ApiService,
    public dialog: MatDialog,
    
    ) { 
      this.form = this.fb.group({
        nome:[],
        cognome: [],
        email: ['', Validators.required], 
        messaggio: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(12)]],
      })
    }
  ngOnInit(): void {
   
  }

  openDialog() {
    this.dialog.open(PopupcandidaturaComponent, {
      data: {
        utente: 'utenteregistrato',
      },
      
    });
  }
  
  
  
  FormContatti(){
    //const contattiIdform = FormsModule.querySelector('input[contatto1=contatto1]').value;
      var nome = this.form.value.nome
      var cognome = this.form.value.cognome
      var email = this.form.value.email
      var messaggio = this.form.value.messaggio
      var contatto= {
        nome:nome,
        cognome:cognome,
        messaggio:messaggio,
        email:email
      }
      this.api.postcontatti(contatto).subscribe((res)=>{
      this.openDialog()
      
      console.log(res)
      //console.log(this.form.controls['message'].errors)
      //this.router.navigate(["/contatti"]) 
       })
    // const message = 
    // 'mi chiamo ${this.name}';
    // 'la mia email è: ${this.email}';
    // 'il mio messaggio è: ${this.email}';
    // //alert(message);
    console.log(this.name, this.surname, this.email, this.message)
  }
 
  submitcontatto(){
    // const dati = this.form.value.subscribe((res)==>{
    //   this.contatto
    // })
  }

  
  
 
    
  getcontatti(linkcontatto:string ){
    // const riindirizzare = "localhost:4200/contatti/"+ this.data.id
    if( linkcontatto == 'whatsapp' ){
      // https://api.whatsapp.com/send?text=[link]
      window.location.href = "https://web.whatsapp.com/send?text="
    }
    else if(linkcontatto == 'facebook'){
      window.location.href = "https://it-it.facebook.com/login/"
    }
    // else facebook, else twitter (simile a whatsapp)
    else if( linkcontatto == "mail" ){
      window.location.href = "mailto:amm.statistNBA@Gmail.com?body="
    }
    else if ( linkcontatto == 'copy'){
      // simulo ctrl + c
      navigator.clipboard.writeText('http://localhost:4200/contatti');
    }}}
  

  






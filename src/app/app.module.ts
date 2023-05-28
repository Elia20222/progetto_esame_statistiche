import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { DataEOraComponent } from './components/data-eora/data-eora.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
//import { MatDateFormats } from '@angular/material/core';
//import { MatDatePicker }
import { MatNativeDateModule } from '@angular/material/core';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { PunteggiovittoriaComponent } from './components/punteggiovittoria/punteggiovittoria.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { DialogComponent } from './dialog/dialog.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GareEComponent } from './components/gare-e/gare-e.component';
import { CambiopaginaclassificaComponent } from './cambiopaginaclassifica/cambiopaginaclassifica.component';
import { POPUPatletiComponent } from './components/popupatleti/popupatleti.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PopupcandidaturaComponent } from './components/popupcandidatura/popupcandidatura.component';
import { CondividieseguiciComponent } from './components/condividieseguici/condividieseguici.component';
import {MatSidenavModule} from '@angular/material/sidenav'; //usarlo nel bottone atleta
import {MatToolbarModule} from '@angular/material/toolbar';
import { PopPupInfoGiocatoriComponent } from './components/pop-pup-info-giocatori/pop-pup-info-giocatori.component';
import { HomeComponent } from './components/home/home.component'; //usarlo nel bottone atleta
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClassificaComponent,
    DataEOraComponent,
    DatapickerComponent,
    PunteggiovittoriaComponent,
    RicercaComponent,
    DialogComponent,
    ChisiamoComponent,
    GareEComponent,
    CambiopaginaclassificaComponent,
    POPUPatletiComponent,
    ContattiComponent,
    PopupcandidaturaComponent,
    CondividieseguiciComponent,
    PopPupInfoGiocatoriComponent,
    HomeComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatNativeDateModule,
    MatButtonModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule
    
    
    
    
    
    //MatDateFormats
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

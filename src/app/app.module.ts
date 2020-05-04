import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListPortafolioComponent } from './components/list-portafolio/list-portafolio.component';
import { InfoPortafolioComponent } from './components/info-portafolio/info-portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortafolioComponent,
    SkillsComponent,
    ContactoComponent,
    ListPortafolioComponent,
    InfoPortafolioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule


  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

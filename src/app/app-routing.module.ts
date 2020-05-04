import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from "./components/home/home.component";
import { PortafolioComponent } from "./components/portafolio/portafolio.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactoComponent } from "./components/contacto/contacto.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'contacto', component: ContactoComponent},
];


export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
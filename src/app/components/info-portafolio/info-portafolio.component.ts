import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-portafolio',
  templateUrl: './info-portafolio.component.html',
  styleUrls: ['./info-portafolio.component.css']
})
export class InfoPortafolioComponent implements OnInit {
  public title : string;
  public description: string;
  public year: number;
  public empresa: string;

  constructor() { 
    this.title = "Título del Proyecto"
    this.description= "Desarrollo de pagina web para la empresa X";
    this.year= 2019;
    this.empresa = "HighForce"
  }

  ngOnInit(): void {
  }

}

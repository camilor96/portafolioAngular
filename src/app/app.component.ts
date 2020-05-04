import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camilocode';
  constructor(){

  }

  ngOnInit(): void {
// selector
var menu = document.querySelector('.hamburger');
var home = document.querySelector('.home');
/* var skills = document.querySelector('.skills'); */
var portafolio = document.querySelector('.portafolio');
var contacto = document.querySelector('.contacto');

// method
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
home.addEventListener('click', toggleMenu, false);
/* skills.addEventListener('click', toggleMenu, false); */
portafolio.addEventListener('click', toggleMenu, false); 
contacto.addEventListener('click', toggleMenu, false);     
  }

}

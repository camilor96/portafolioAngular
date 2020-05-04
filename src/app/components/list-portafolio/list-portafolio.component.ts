import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent, NgbSlideEventSource } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-portafolio',
  templateUrl: './list-portafolio.component.html',
  styleUrls: ['./list-portafolio.component.css']
})
export class ListPortafolioComponent implements OnInit {
  @ViewChild('ngcarousel', {static:true}) ngCarousel : NgbCarousel;

  constructor() { }

  ngOnInit(): void {

  }
  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

/*   slideActivate(ngbSlideEvent: NgbSlideEvent){
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT); 
  } */
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPortafolioComponent } from './info-portafolio.component';

describe('InfoPortafolioComponent', () => {
  let component: InfoPortafolioComponent;
  let fixture: ComponentFixture<InfoPortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

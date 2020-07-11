import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonPlayerCardComponent } from './jason-player-card.component';

describe('JasonPlayerCardComponent', () => {
  let component: JasonPlayerCardComponent;
  let fixture: ComponentFixture<JasonPlayerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasonPlayerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasonPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

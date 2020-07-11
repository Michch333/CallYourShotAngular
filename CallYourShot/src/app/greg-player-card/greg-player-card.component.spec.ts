import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregPlayerCardComponent } from './greg-player-card.component';

describe('GregPlayerCardComponent', () => {
  let component: GregPlayerCardComponent;
  let fixture: ComponentFixture<GregPlayerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregPlayerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

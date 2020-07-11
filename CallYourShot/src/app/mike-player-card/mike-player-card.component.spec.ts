import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikePlayerCardComponent } from './mike-player-card.component';

describe('MikePlayerCardComponent', () => {
  let component: MikePlayerCardComponent;
  let fixture: ComponentFixture<MikePlayerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikePlayerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikePlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

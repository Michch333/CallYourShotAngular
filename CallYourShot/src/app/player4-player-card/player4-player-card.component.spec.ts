import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Player4PlayerCardComponent } from './player4-player-card.component';

describe('Player4PlayerCardComponent', () => {
  let component: Player4PlayerCardComponent;
  let fixture: ComponentFixture<Player4PlayerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Player4PlayerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Player4PlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

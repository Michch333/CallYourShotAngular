import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GregPlayerCardComponent } from './greg-player-card/greg-player-card.component';
import { MikePlayerCardComponent } from './mike-player-card/mike-player-card.component';
import { JasonPlayerCardComponent } from './jason-player-card/jason-player-card.component';
import { Player4PlayerCardComponent } from './player4-player-card/player4-player-card.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { FillerComponent } from './filler/filler.component';

@NgModule({
  declarations: [
    AppComponent,
    GregPlayerCardComponent,
    MikePlayerCardComponent,
    JasonPlayerCardComponent,
    Player4PlayerCardComponent,
    DiceRollComponent,
    FillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

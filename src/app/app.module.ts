import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutComponent } from './about/about.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InstructionsComponent,
    AboutComponent,
    PlayingCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

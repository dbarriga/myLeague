import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule 
} from '@angular/material';



import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TeamComponent,
    PlayerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { NbaComponent } from './nba/nba.component';
import { GameComponent } from './nba/game/game.component';
import { GameBoxscoreComponent } from './nba/game-boxscore/game-boxscore.component';
import { GameListComponent } from './nba/game-list/game-list.component';
import { GameListDateComponent } from './nba/game-list-date/game-list-date.component';
import { GameLogComponent } from './nba/game-log/game-log.component';
import { PlayersComponent } from './nba/players/players.component';
import { SharedComponent } from './nba/shared/shared.component';
import { TeamsComponent } from './nba/teams/teams.component';
import { CoreModule } from './core/main-nav/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

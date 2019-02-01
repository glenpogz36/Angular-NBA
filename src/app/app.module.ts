import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompareModule } from './compare/compare.module';
import { CoreModule } from './core/core.module';
import { TeamsModule } from '../teams/teams.module';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';

import { AuthInterceptor } from './shared/auth-interceptor';
import { MatchupComponent } from './matchup/matchup.component';
import { MatchupSelectComponent } from './matchup/matchup-select/matchup-select.component';
import { MatchupSelectedplayersComponent } from './matchup/matchup-selectedplayers/matchup-selectedplayers.component';
import { MatchupCompareComponent } from './matchup/matchup-compare/matchup-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchupComponent,
    MatchupSelectComponent,
    MatchupSelectedplayersComponent,
    MatchupCompareComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CompareModule,
    HttpClientModule,
    HttpModule,
    TeamsModule,
    GamesModule,
    PlayersModule,
    AppRoutingModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NBARoutingModule } from './nba-routing.module';
import { GamesService } from './nba.service';
import { NbaComponent } from './nba.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { GameLogComponent } from './game-log/game-log.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GameListDateComponent } from './game-list-date/game-list-date.component';
import { GameBoxscoreComponent } from './game-boxscore/game-boxscore.component';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        NBARoutingModule
    ],
    declarations: [
        NbaComponent,
        GameListComponent,
        GameComponent,
        GameLogComponent,
        GameListDateComponent, GameBoxscoreComponent
    ],
    exports: [
        NbaComponent,
        GameComponent,
        GameListComponent,
        GameListDateComponent,
        GameLogComponent
    ],
    providers: [
        GamesService
    ]
})
export class GamesModule { }
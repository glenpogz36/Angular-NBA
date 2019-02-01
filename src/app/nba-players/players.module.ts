import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/** COMPONENTS */

import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';


/** MODULES */
import { PlayersRoutingModule } from './players-routing.module';
import { GamesModule } from '../nba/nba.module'
import { ChartModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** SERVICES */
import { PlayersService } from './players.service';
import { PlayerListComponent } from './player-list/player-list.component';
import { LeagueLeadersComponent } from './league-leaders/league-leaders.component';

@NgModule({
    imports: [
        ChartModule,
        CommonModule,
        DataTableModule,
        GamesModule,
        MatProgressSpinnerModule,
        PlayersRoutingModule,
        SharedModule
    ],
    declarations: [
        PlayersComponent,
        PlayerComponent,
        PlayerListComponent,
        LeagueLeadersComponent,
    ],
    exports: [
        PlayersComponent
    ],
    providers: [
        PlayersService
    ]
})
export class PlayersModule { }

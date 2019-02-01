import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'players',
                component: PlayersComponent,
                children: [
                    {
                        path: ':id',
                        component: PlayerComponent
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class PlayersRoutingModule { }

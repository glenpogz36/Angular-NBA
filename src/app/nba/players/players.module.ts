import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/** COMPONENTS */

import { PlayersComponent } from './players.component';


/** MODULES */
import { PlayersRoutingModule } from './players-routing.module';
import { ChartModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** SERVICES */
import { PlayersService } from './players.service';

@NgModule({
    imports: [
        ChartModule,
        CommonModule,
        DataTableModule,

        MatProgressSpinnerModule,
        PlayersRoutingModule,
        SharedModule
    ],
    declarations: [
        PlayersComponent,
    ],
    exports: [
        PlayersComponent
    ],
    providers: [
        PlayersService
    ]
})
export class PlayersModule { }

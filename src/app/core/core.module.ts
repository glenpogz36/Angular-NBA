import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component'

// Services
import { HomeService } from './home-page/home.service'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

    ],
    exports: [
        HomePageComponent,
        MainNavComponent,
    ],
    declarations: [
        HomePageComponent,
        MainNavComponent,


    ],
    providers: [
        HomeService,
    ]
})
export class CoreModule { }

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';


const appRoutes: Routes = [ 
    {
        path: '',
        component: HomePageComponent,
        
    }
]

import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path:'',
        component:Child1Component
    },{
        path:'login',
        component:Child1Component
    },{
        path:'register',
        component:Child2Component
    },{
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'main',
        component:MainComponent
    },
    {
        path:'**',
        component:PagenotfoundComponent
    }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoxComponent } from './box/box.component';
import { Box2Component } from './box2/box2.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
    {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
},{
    path:'login',
    component:LoginComponent
},{
    path:'home',
    component:DashboardComponent
},{
    path:'register',
    component:RegistrationComponent
},{
    path:'**',
    component:Box2Component
}];

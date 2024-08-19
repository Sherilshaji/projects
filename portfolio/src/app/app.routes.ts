import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/main/home',
        pathMatch:'full'
    },{
        path:'main',
        component:MainpageComponent,
        children:[
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'projects',
                redirectTo:'/main/projects',
                pathMatch:'prefix'
            }
        ]
    
    },{
        path:'aboutme',
        component:AboutmeComponent
    },{
        path:'projects',
        component:ProjectComponent
    },{
        path:'contact',
        component:ContactComponent
    }]
},{
    path:'**',
    component:PagenotfoundComponent
}
];

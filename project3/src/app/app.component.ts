import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CommonModule, NgIf } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Child1Component,Child2Component,CommonModule,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project3';

}

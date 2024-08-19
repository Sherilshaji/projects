import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}

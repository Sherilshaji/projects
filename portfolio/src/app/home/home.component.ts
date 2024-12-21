import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Profile } from '../interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  profile:Profile={
    name:'',
    title:''
  };
  constructor(public service:ProfileService){ }
  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    this.service.profile().subscribe(result=>{
      this.profile=result;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Aboutme } from '../interface';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit{
  aboutme:Aboutme={
    aboutme:''
  }
  constructor(private service:ProfileService){}
  ngOnInit(){
    this.getAboutme();
  }
  getAboutme(){
    this.service.aboutme().subscribe(result=>{
      this.aboutme=result;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Project } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  projects:Project[]=[]
  constructor(private service:ProfileService){}
  ngOnInit(){
    this.getProjects();
  }
  getProjects(){
    this.service.projects().subscribe(results=>{
      this.projects=results;
    })
  }
}

import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,RouterOutlet,RouterLink
  ],
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent{
  userName!:string;
  age!:number;
  constructor(private route:ActivatedRoute){
  // this.route.queryParams.subscribe(params=>{
  //   this.userName=params['name'];
  //   this.age=params['age']
  //   console.log(this.userName);
  //   console.log(this.age);
  // })
  this.route.params.subscribe(params=>{this.userName=params['name'];
    this.age=params['age'];
  }
  )
  } 
}

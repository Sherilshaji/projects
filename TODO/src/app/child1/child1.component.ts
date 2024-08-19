import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../interface';
import { TODOService } from '../todo.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  user!:User[];
  newUser:User={
    name:'',
    password:''
  };
  constructor(private service:TODOService,private router:Router){}
  login(){
    this.service.getUser().subscribe(result=>{
      const sample=result.find(value=>value.name==this.newUser.name&&value.password==this.newUser.password);
      if(sample){
        alert("Login Successful");
        this.router.navigate(['/main']);
      }
      else{
        alert("Incorrect Details.");
        this.clear();
      }
    })
  }
  clear(){
    this.newUser={
      name:'',
      password:''
    };
  }
}

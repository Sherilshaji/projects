import { Component } from '@angular/core';
import { User } from '../interface';
import { TODOService } from '../todo.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  user!:User[];
  password!:string;
  newUser:User={
    name:'',
    password:''
  };
  constructor(private service:TODOService,private router:Router){}
  regUser(){
    if(this.newUser.password==this.password&&this.newUser.name!=''){
    this.service.checkUser(this.newUser.name).subscribe(result=>{
      if(result.length){
        alert("User already exist.");
      }
      else{
        this.service.regUser(this.newUser).subscribe(result=>{
          console.log(result);
          this.clear();
          alert("Registration Successful");
          this.router.navigate(['/login']);
        })
      }
    })
  }else{
    alert("Invalid credential.");
    this.clear();
  }
  }
  clear(){
    this.newUser={
      name:'',
      password:''
    };
    this.password='';
  }
}

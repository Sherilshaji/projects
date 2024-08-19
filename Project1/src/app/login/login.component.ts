import { Component } from '@angular/core';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BoxComponent } from '../box/box.component';
import { FormsModule } from '@angular/forms';
import { Box2Component } from '../box2/box2.component';
import { Interface } from '../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BoxComponent,FormsModule,Box2Component,RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.css']
})
export class LoginComponent {
  userName!:string;
  password!:string;
  student:Interface={
    userName:'',
    password:'',
    email:'',
    phone:0
  }
  constructor(private studentService:UserService,private router:Router){
  }
  clear(){
    this.student={
      userName:'',
      password:'',
      email:'',
      phone:0
    }
  }
  authenticateStudent(){
    this.studentService.getStudent(this.userName,this.password).subscribe(result=>{
      const student=result.find(student=>student.userName==this.userName&&student.password==this.password);
      if(student){
        alert("Login successful");
        this.router.navigate(['/home']);
      }
      else{
        alert("User does not exist.");
        this.clear();
      }
    })
  }
}

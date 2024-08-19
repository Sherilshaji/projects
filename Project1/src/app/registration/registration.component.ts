import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Interface } from '../interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  student:Interface={
    userName:'',
    email:'',
    phone:0,
    password:''
  };
  confirmPass!:string;
  constructor(private studentService:UserService,private router:Router){}
  regStudent(){
    if(this.confirmPass!=this.student.password){
      alert("Mismatch in passwords.");
      this.student.password='';
      this.confirmPass='';
    }
    else{
      this.studentService.filterStudent(this.student.userName).subscribe(result=>{
      if(result.length){
        alert("User already exist.")
      }
      else{
      this.studentService.insertStudent(this.student).subscribe(result=>{
        this.clear();
        alert("Registration Successful.")
        this.router.navigate(['/login']);
      });
    }
  });
  }
  }
  clear(){
    this.student={
      userName:'',
      email:'',
      phone:0,
      password:''
    }
  }
}

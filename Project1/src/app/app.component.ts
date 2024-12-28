import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { Box2Component } from './box2/box2.component';
import { BoxComponent } from './box/box.component';
import { Interface } from './interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgIf,Box2Component,LoginComponent,FormsModule,BoxComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{  
  title = 'Project1';
  // array:Interface[]=[];
  // showUser:boolean=false;
  // editMode:boolean=false;
  // editUserData!:Interface
  // constructor(private userService:UserService){
  //   this.getUsers();
  // }

  // getUsers(){
  //   this.userService.fetchUsers().subscribe(result=>{
  //     this.array=result;
  //   })
  // }
  // submit(){
  //   console.log("User added");
  //   this.getUsers();
  // }
  // showaddUser(){
  //   this.clear();
  //   this.showUser=true;
  //   this.editMode=false;
  // }
  // hideUser(){
  //   this.showUser=false;
  // }
  // dlt(userId:number|undefined){
  //   this.userService.dlt(userId).subscribe(result=>{
  //     alert("User Deleted.");
  //     this.getUsers();
  //   })
  // }
  // edt(user:Interface){
  //   this.editMode=true;
  //   this.editUserData=user;
  //   this.showUser=true;
  // }
  // clear(){
  //   this.editUserData={
  //     name:'',
  //     age:0
  //   };
  // }
}
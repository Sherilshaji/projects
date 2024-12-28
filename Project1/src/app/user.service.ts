import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient } from '@angular/common/http';
import { Interface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  studentAPIUrl='http://localhost:3000/students';

  constructor(private http:HttpClient) {}

insertStudent(student:Interface){
  return this.http.post<Interface[]>(this.studentAPIUrl,student)
}
filterStudent(student:string){
  return this.http.get<Interface[]>(this.studentAPIUrl+"?userName="+student);
}
getStudent(userName:string,password:string){
  return this.http.get<Interface[]>(`${this.studentAPIUrl}`);
}

}
//   restAPIUrl='http://localhost:3000/users';
//   deleteAPIUrl='http://localhost:3000/users/';
//   editAPIUrl='http://localhost:3000/users/';
//   
//   fetchUsers(){
//     return this.http.get<Interface[]>(this.restAPIUrl)
//   }
//   addUsers(user:Interface){
//     return this.http.post<Interface[]>(this.restAPIUrl,user);
//   }
//   dlt(userId:number|undefined){
//     return this.http.delete(this.deleteAPIUrl+userId)
//   }
//   edit(user:Interface){
//     return this.http.put<Interface[]>(this.editAPIUrl+user.id,user)
//   }
// }

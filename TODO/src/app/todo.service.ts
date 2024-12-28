import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface, User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class TODOService {
  taskUrl="http://localhost:3000/tasks";
  userUrl="http://localhost:3000/user";
  constructor(private http:HttpClient) { }
  
  addOperation(taskDetails:Interface){
    return this.http.post<Interface[]>(this.taskUrl,taskDetails);
  }
  removeOperation(taskId:number | undefined){
    return this.http.delete<Interface[]>(this.taskUrl+'/'+taskId);
  }
  loadOperation(){
    return this.http.get<Interface[]>(this.taskUrl);
  }
  editOperation(taskDetails:Interface){
    return this.http.put<Interface[]>(this.taskUrl+'/'+taskDetails.id,taskDetails);
  }
  getOperation(taskId:number|undefined){
    return this.http.get<Interface>(this.taskUrl+"/"+taskId)
  }
  regUser(userDetails:User){
    return this.http.post<User[]>(this.userUrl,userDetails);
  }
  getUser(){
    return this.http.get<User[]>(this.userUrl);
  }
  checkUser(userId:string){
    return this.http.get<User[]>(this.userUrl+"?name="+userId);
  }
  toggle(taskId:number | undefined,task:Interface){
    return this.http.put<Interface[]>(this.taskUrl+'/'+taskId,task)
  }
  
// addFav(){
// }
// getFavTask(){
//  }
// removefav(){
// }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aboutme, Contacts, Profile, Project } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl="http://localhost:3000/profile";
  aboutmeUrl="http://localhost:3000/aboutme";
  projectUrl="http://localhost:3000/projects";
  contactUrl="http://localhost:3000/contacts";
  constructor(private http:HttpClient) { }
  profile(){
    return this.http.get<Profile>(this.profileUrl);
  }
  aboutme(){
    return this.http.get<Aboutme>(this.aboutmeUrl);
  }
  projects(){
    return this.http.get<Project[]>(this.projectUrl);
  }
  contacts(){
    return this.http.get<Contacts>(this.contactUrl);
  }
}

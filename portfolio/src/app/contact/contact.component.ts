import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Contacts } from '../interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contacts:Contacts={
    phone:0,
    email:'',
    location:''
  }
  constructor(private service:ProfileService){}
  ngOnInit(){
    this.getContacts();
  }
  getContacts(){
    this.service.contacts().subscribe(result=>{
      this.contacts=result;
    })
  }
}

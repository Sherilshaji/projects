import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Child1Component,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project4';
  countValue:number=0;
  employeName!:string;
  department!:string;
  salary:number=0;
  options:string[]=['Male','Female'];
  gender:string=this.options[0];
  address!:string;
  empData:Employee[]=[];
  empName:string[]=[];
  show:boolean=true;
  toggle:string='Hide';
  constructor(private dataService:DataService){ }
  ngOnInit(){
    this.loadEmployeeNames();
  }
  loadEmployeeNames(){
    const names=this.dataService.loadempName();
    this.empName=names?names:[];
  }
  add(){
    let newEmployee:Employee={
      employeName:this.employeName,
      department:this.department,
      salary:this.salary,
      gender:this.gender,
      address:this.address
    };
    this.dataService.addEmployee([newEmployee]);
    this.clear();
    this.empData=this.dataService.loadData();
  }
  get(){
    this.empData=this.dataService.getEmployee(this.employeName);
    console.log(this.empData)
  }
  onChange(event:Event){
    const target=event.target as HTMLSelectElement;
    this.employeName=target.value;
    console.log(this.employeName)
  }
  OnSelectionChange(value:string){
    this.gender=value;
  }
  count(value:number){
    this.countValue=value;
  }
  clear(){
      this.employeName=''
      this.department=''
      this.salary=0;
      this.gender=this.options[0];
      this.address=''
  }
  toggleButton(){
    this.show=!this.show;
    if(this.show){
    this.toggle='Hide'
    }else{
      this.toggle='Show'
    }
  }
}

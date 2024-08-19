import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employesBackup!:Employee[];
  constructor() { 
    this.employesBackup=this.employes
  }
  employes:Employee[]=[{
    
  "employeName": "Melinda Bigland",
  "department": "Engineering",
  "salary": 32896,
  "gender": "Female",
  "address": "5th Floor"
}, {
  "employeName": "Sergio Cody",
  "department": "Marketing",
  "salary": 44282,
  "gender": "Male",
  "address": "Apt 182"
}, {
  "employeName": "Kimberley Royson",
  "department": "Research and Development",
  "salary": 32066,
  "gender": "Female",
  "address": "Room 1263"
}, {
  "employeName": "Sonnie Dover",
  "department": "Legal",
  "salary": 47551,
  "gender": "Male",
  "address": "Apt 850"
}, {
  "employeName": "Darlleen Wilshere",
  "department": "Marketing",
  "salary": 48848,
  "gender": "Female",
  "address": "5th Floor"
}, {
  "employeName": "Holmes Hughesdon",
  "department": "Support",
  "salary": 37712,
  "gender": "Male",
  "address": "9th Floor"
}, {
  "employeName": "Jackie Ayars",
  "department": "Research and Development",
  "salary": 49461,
  "gender": "Female",
  "address": "Apt 1572"
}, {
  "employeName": "Osbourn Gilpillan",
  "department": "Product Management",
  "salary": 35015,
  "gender": "Male",
  "address": "20th Floor"
}, {
  "employeName": "Carlie Trueman",
  "department": "Sales",
  "salary": 36123,
  "gender": "Male",
  "address": "Room 1305"
}, {
  "employeName": "Haven Baford",
  "department": "Human Resources",
  "salary": 46804,
  "gender": "Male",
  "address": "PO Box 87496"
  }];


  getEmployee(empName:string){
    this.employes=this.employesBackup.filter(x =>x.employeName==empName);
    return this.employes;
  }
  addEmployee(empData:Employee[]){
    this.employesBackup.push(...empData);
    this.loadData();
  }
  loadData(){
    return this.employesBackup;
  }
  loadempName(){
    return this.employesBackup.map(x=>x.employeName);
  }
}

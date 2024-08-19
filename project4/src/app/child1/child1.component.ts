import { CommonModule } from '@angular/common';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit,OnChanges,OnDestroy,DoCheck{
  count:number=0;
  employeName!:string;
  department!:string;
  salary:number=0;
  options:string[]=['Male','Female'];
  gender:string=this.options[0];
  address!:string;
  empData:Employee[]=[]
  @Input() empDatas:Employee[]=[];
  @Output() countValue=new EventEmitter<number>();
  constructor(private dataService:DataService){}
  ngOnInit(){
    this.empData=this.dataService.loadData();
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['empDatas']){
        this.empData=changes['empDatas'].currentValue;
        console.log('empDatas changed:',this.empData);
      }
  }
  ngDoCheck(): void {
      console.log('DoCheck called');
  }
  ngOnDestroy(): void {
      console.log('On Destroy')
  }
  addNewEmp(){
    this.count=1;
    this.countValue.emit(this.count);
  }
  
}

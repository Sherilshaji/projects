import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
@Output() addItemEvent=new EventEmitter<any>();

items:any=[];

addItem(item:string){
  const itemNumber=item.split('-')[1];
  this.addItemEvent.emit(itemNumber);
}
constructor(private dataservice:DataService){
}
}

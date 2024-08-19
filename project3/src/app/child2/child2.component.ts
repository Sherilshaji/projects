import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Child2Component implements OnChanges {
@Input() items:string[]=[];
@Output() removeItemEvent=new EventEmitter<string>();
ngOnChanges(changes:SimpleChanges){
  if(changes['items']){
    this.items=changes['items'].currentValue;
  }
}
remove(item:string){
  this.removeItemEvent.emit(item);
}
}

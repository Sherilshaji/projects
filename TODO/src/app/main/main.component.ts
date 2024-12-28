import { Component } from '@angular/core';
import { TODOService } from '../todo.service';
import { Interface } from '../interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink,MatButtonModule,MatSlideToggleModule,MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  page:number=0;
  div:number=0;
  userInput:string='';
  newtask:Interface={
    taskName:'',
    creationDate:new Date(),
    dueDate: new Date(),
    lastUpdateDate:new Date(),
    status:'Pending',
    toggleState:false
  };
  tasks!:Interface[];
  tasksPending!:Interface[];
  tasksCompleted!:Interface[];
  priorityTask:Interface | null=null;
  pendingTasksofToday:Interface[]=[];
  pendingTasksofWeek:Interface[]=[];
  pendingTasksofMonth:Interface[]=[];
  constructor(private todoService:TODOService,private dialog:MatDialog){
    this.loadtasks();
  }
  task(){
    this.page=0;
  }
  pending(){
    this.page=1;
  }
  completed(){
    this.page=2;
  }
  toggle(task:Interface){
    task.toggleState=!task.toggleState;
    task.status=task.toggleState?'Completed':'Pending';
    this.todoService.toggle(task.id,task).subscribe(result=>{
      this.loadtasks();
    })
  }
  clone(taskid:number|undefined){
    this.todoService.getOperation(taskid).subscribe(result=>{
      const sample=result;
      if(sample){
        this.newtask.taskName=result.taskName;
        this.newtask.dueDate=result.dueDate;
      }
    })
  }
  openPopup(){
    if(!this.tasks||this.tasks.length==0){
      this.priorityTask=null;
    }else{
    const highPriorityTask=this.tasks.sort((a,b)=>new Date(a.dueDate).getTime()-new Date(b.dueDate).getTime());
    this.priorityTask=highPriorityTask[0] || null;
    }
    this.dialog.open(PopupComponent,{
      width:'350px',
      data:{message:this.priorityTask?this.priorityTask.taskName:'No high-priority tasks available'}
    });
  }
  loadtasks(){ 
    this.todoService.loadOperation().subscribe(result=>{
      this.tasks=result;
      this.tasksPending=this.tasks.filter(x=>x.toggleState==true);
      this.tasksCompleted=this.tasks.filter(x=>x.toggleState==false);
      this.openPopup();
      this.findPendingTasksofToday();
    },
  error=>{
    console.error('Error loading tasks',error);
    this.tasks=[];
    this.openPopup();
    }
    );
  }
  findPendingTasksofToday(){
    const today=new Date();
    today.setHours(0,0,0,0);
    const tomorrow=new Date(today);
    tomorrow.setDate(today.getDate()+1);
    
    this.pendingTasksofToday=this.tasks.filter(task=>{
      const dueDate=new Date(task.dueDate);
      return task.status=='Pending' &&dueDate>=today&&dueDate<tomorrow;
    });
  }
  findPendingTasksoftheWeek(){
    this.div=1;
    const today=new Date();
    const startofWeek=new Date(today);
    startofWeek.setDate(today.getDate()-today.getDay());
    startofWeek.setHours(0,0,0,0);
    const endofWeek=new Date(startofWeek);
    endofWeek.setDate(startofWeek.getDate()+7);

    this.pendingTasksofWeek=this.tasks.filter(task=>{
      const dueDate=new Date(task.dueDate);
      return task.status=='Pending' &&dueDate>=startofWeek&&dueDate<endofWeek;
    });
  }
  findPendingTasksoftheMonth(){
    this.div=2;
    const today=new Date();
    const startofMonth=new Date(today.getFullYear(),today.getMonth(),1);
    startofMonth.setHours(0,0,0,0);
    const endofMonth=new Date(today.getFullYear(),today.getMonth()+1,0);
    endofMonth.setHours(23,59,59,999);

    this.pendingTasksofMonth=this.tasks.filter(task=>{
      const dueDate=new Date(task.dueDate);
      return task.status=='Pending' &&dueDate>=startofMonth&&dueDate<endofMonth;
    });   
  }
  add(){
    this.todoService.addOperation(this.newtask).subscribe(result=>{
      console.log(result);
      this.loadtasks();
      this.clear();
    })
  }
  remove(userId:number | undefined){
    this.todoService.removeOperation(userId).subscribe(result=>{
      this.loadtasks();
    })
  }
  edit(taskDetails:Interface){
    this.todoService.editOperation(taskDetails).subscribe(result=>{
      taskDetails.lastUpdateDate=new Date();
      this.newtask=taskDetails;
      this.remove(taskDetails.id);
    })
  }
  clear(){
    this.newtask={
      taskName:'',
    creationDate:new Date(),
    dueDate: new Date(),
    lastUpdateDate:new Date(),
    toggleState:false
    }
  }
}

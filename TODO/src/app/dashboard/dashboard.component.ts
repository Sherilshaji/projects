import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { TODOService } from '../todo.service';
import { Interface } from '../interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart,registerables, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  variable!:number;
  options: ChartOptions<any> = {};
  var1!:number;
  var2!:number;
  tasks!:Interface[];
  tasksPending!:Interface[];
  tasksCompleted!:Interface[];
  @ViewChild('myChart') myChart!:ElementRef<HTMLCanvasElement>;
  constructor(private service:TODOService){}
  ngOnInit(): void {
    Chart.register(...registerables);
    this.loadTasks();
  }
  loadTasks(){
    this.service.loadOperation().subscribe(result=>{
      this.tasks=result;
      this.variable=this.tasks.length;
      this.tasksPending=this.tasks.filter(s=>s.toggleState==false);
      this.var1=this.tasksPending.length;
      this.tasksCompleted=this.tasks.filter(s=>s.toggleState==true);
      this.var2=this.tasksCompleted.length;
      this.createChart();
    })
  }
  createChart() {
    const canvas = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Pending', 'Completed'],
        datasets: [{
          label: 'Tasks',
          data: [this.var1, this.var2],
          backgroundColor: [
            '#660B81',
            '#EE1EF9',
          ],
          borderColor: [
            '#660B81',
            '#EE1EF9',
          ],
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 4,
        plugins: {
          title: {
            display: true,
            text: 'Task Status'
          }
        }
      }
    });
  }
}

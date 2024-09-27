import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { TodoserviceService } from '../services/todoservice.service';



export interface Task{
  taskname : string,
  isCompleted : boolean
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent implements OnInit {
  
  taskname : string = "";
  iscompleted : boolean = false;
  
  isEdit : boolean = false;
  
  editIndex : number | null = null;

  tasks : Task[] = [];
  err : string = "";
  
  
  ngOnInit(): void {
    this.tasks = this.storgeService.getTask();
  }
  
  
  constructor(private storgeService : TodoserviceService){}


  getTask(){
    return this.storgeService.getTask();
  }
  
  addTask(){

    if(this.taskname != ""){
      const newTask : Task = {
        taskname :this.taskname,
        isCompleted : this.iscompleted
      }
      if(this.storgeService.setTask(newTask)){
        this.err="Added Successfully";
      } else {
        this.err="Task Already Exist";
      }
      
      this.tasks = this.getTask();
    }

  }


  updateTask() {
    if(this.editIndex!= null){
      this.tasks[this.editIndex].taskname = this.taskname;
      this.storgeService.update(this.tasks);
      this.isEdit = false;
      this.editIndex = null;
      this.taskname = "";
      this.tasks = this.storgeService.getTask();
    }
  }

  editTask(task : Task){
    this.taskname = task.taskname;
    this.isEdit = true;
    this.editIndex = this.tasks.indexOf(task); 
  }

  deleteTask(taskname : string){
    this.storgeService.deleteTask(taskname);
    this.tasks = this.getTask();
  }


  toggleCompletion(task : Task) {
    task.isCompleted = !task.isCompleted
    this.storgeService.updateTask(task);
    this.tasks = this.getTask();
  }

}

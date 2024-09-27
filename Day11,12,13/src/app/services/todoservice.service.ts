import { Injectable } from '@angular/core';
import { Task } from '../to-do-list/to-do-list.component';


@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

    constructor() { }

    getTask() : Task[]{
      if(typeof window!= 'undefined' && window.localStorage){
        const tasks = localStorage.getItem('tasks');
        return tasks? JSON.parse(tasks) : [];
      } 
      else {
        return [];
      }
    }
  
    setTask(newTask: Task) : boolean{
      const tasks = this.getTask();
      const taskExists = tasks.some(task => task.taskname === newTask.taskname);
      if (!taskExists) {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return true;
      } else {
        return false;
      }
    }


    deleteTask(taskname : string){
      const tasks = this.getTask();
      const deleteList = tasks.filter(t => t.taskname != taskname);
      localStorage.setItem('tasks', JSON.stringify(deleteList));
    }



    editAtIndex(index: number, updatedTask: Task) {
      const tasks = this.getTask();
      if (index >= 0 && index < tasks.length) {
        tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
    

    updateTask(task : Task){
      const tasks = this.getTask();
      const index = tasks.findIndex(t => t.taskname ===  task.taskname);
      if (index !== -1) {
        tasks[index] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
    
    update(tasks : Task[]){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  task: Task = {
    title:'',
    description: ''
  }
  constructor(public taskService: TaskService) {  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.task.title != '' && this.task.description != ''){
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }
}

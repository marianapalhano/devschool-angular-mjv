import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task?: Task;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

  setStatus() {
    if (this.task) {
      this.task.completed = !this.task.completed;
    }
  }

}

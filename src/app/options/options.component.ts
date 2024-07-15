import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {TodoItemStorageService} from "../../services/todoItemStorageService";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  sorted = false;

  constructor(private todoItemService: TodoItemStorageService) {}


  fontIcon(){
    return this.sorted ? 'sort_by_alpha' : 'calendar_month';
  }

  sort() {
    this.sorted = !this.sorted;
    this.todoItemService.setSort(this.sorted);
  }
}

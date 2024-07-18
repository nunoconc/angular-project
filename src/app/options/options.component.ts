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
  sorted: boolean;
  filtered: boolean;

  constructor(private todoItemService: TodoItemStorageService) {}

  sort() {
    this.sorted = !this.sorted;
    this.todoItemService.setOptions(this.sorted, this.filtered);
  }

  filter() {
    this.filtered = !this.filtered;
    this.todoItemService.setOptions(this.sorted, this.filtered);
  }


}

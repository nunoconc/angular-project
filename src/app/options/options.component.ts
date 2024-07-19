import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {TodoItemService} from "../../services/todoItemService";
import {Options} from "../../types/options";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  options: Options = this.todoItemService.getOptions();

  constructor(private todoItemService: TodoItemService) {}

  sort() {
    this.options.sorted = !this.options.sorted;
    this.todoItemService.setOptions({
      sorted: this.options.sorted,
      filtered: this.options.filtered
    });
  }

  filter() {
    this.options.filtered = !this.options.filtered;
    this.todoItemService.setOptions({
      sorted: this.options.sorted,
      filtered: this.options.filtered
    });
  }


}

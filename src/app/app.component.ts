import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TodoItem} from "../types/todoItem";
import {AddComponent} from "./add/add.component";
import {TodoItemStorageService} from "../services/todoItemStorageService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To Do List';
  todoItems: TodoItem[] = [];

  constructor(private todoItemService: TodoItemStorageService) {
    this.todoItemService.register((items)=>{
      this.todoItems = items;
    });
  }
}

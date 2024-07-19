import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TodoItem} from "../types/todoItem";
import {AddComponent} from "./add/add.component";
import {TodoItemService} from "../services/todoItemService";
import {MatIcon} from "@angular/material/icon";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, AddComponent, MatIcon, OptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To Do List';
  todoItems: TodoItem[];

  constructor(private todoItemService: TodoItemService) {
    this.todoItemService.register((items)=>{
      this.todoItems = items;
    });
  }
}

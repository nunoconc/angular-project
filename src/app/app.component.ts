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
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-List';

  todoItemService = new TodoItemStorageService()

  todoItems = this.todoItemService.get();

  addItemToList = (item: TodoItem) => {
    this.todoItems.push(item);
    this.todoItemService.save(this.todoItems);
  }

  removeItemFromList = (item: TodoItem) => {
    this.todoItems = this.todoItems.filter(it=> it.key !== item.key);
    this.todoItemService.save(this.todoItems);
  }
}

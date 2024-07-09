import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {createTodoItem, TodoItem} from "../../types/todoItem";
import {TodoItemStorageService} from "../../services/todoItemStorageService";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  todoItem: TodoItem =  createTodoItem();

  constructor(private todoItemService: TodoItemStorageService) {}

  onSubmit() {
    this.todoItemService.addItem(this.todoItem);
    this.todoItem =  createTodoItem();
  }
}

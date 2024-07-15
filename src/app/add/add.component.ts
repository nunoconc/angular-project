import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoItem} from "../../types/todoItem";
import {TodoItemStorageService} from "../../services/todoItemStorageService";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  todoItem: TodoItem =  {
    key: '',
    title: '',
    description: '',
    date: '',
  };

  constructor(private todoItemService: TodoItemStorageService) {}

  onSubmit() {
    if(!!this.todoItem.description && !!this.todoItem.title){
      this.todoItem.key = Date.now().toString();
      this.todoItem.date =  new Date().toDateString();
      this.todoItemService.addItem(this.todoItem);
      this.todoItem = {
        key: '',
        title: '',
        description: '',
        date: '',
      };
    }
  }
}

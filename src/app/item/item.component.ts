import {Component, Input} from '@angular/core';
import {TodoItem} from "../../types/todoItem";
import {TodoItemStorageService} from "../../services/todoItemStorageService";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() todoItem?: TodoItem;

  constructor(private todoItemService: TodoItemStorageService) {}

  remove(){
    if(this.todoItem){
      this.todoItemService.removeItem(this.todoItem);
    }
  }
}

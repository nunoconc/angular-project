import {Component, Input} from '@angular/core';
import {TodoItem} from "../../types/todoItem";
import {TodoItemStorageService} from "../../services/todoItemStorageService";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() todoItem?: TodoItem;
  isExpanded: boolean = false;

  constructor(private todoItemService: TodoItemStorageService) {}

  expand(){
    this.isExpanded = true;
  }

  minimize(){
    this.isExpanded = false;
  }

  remove(){
    if(this.todoItem){
      this.todoItemService.removeItem(this.todoItem);
    }
  }
}

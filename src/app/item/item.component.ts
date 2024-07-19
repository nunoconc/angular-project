import {Component, Input} from '@angular/core';
import { TodoItem } from '../../types/todoItem';
import {TodoItemService} from "../../services/todoItemService";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() todoItem: TodoItem;
  isExpanded: boolean;
  isEdit: boolean;

  constructor(private todoItemService: TodoItemService){}

  expand(flag : boolean){
    this.isExpanded = flag;
  }

  remove(){
    if(this.todoItem){
      this.todoItemService.removeItem(this.todoItem);
    }
  }

  done(){
    if(this.todoItem){
      this.todoItemService.updateItem({
        ...this.todoItem,
        done: !this.todoItem.done,
      });
    }
  }

  edit(){
    this.isEdit = !this.isEdit;
  }

  save(){
    if(this.todoItem.title && this.todoItem.description) {
      this.todoItemService.updateItem({
        ...this.todoItem,
      })
    }
  }
}

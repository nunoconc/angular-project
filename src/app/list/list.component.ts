import {Component, Input} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {TodoItem} from "../../types/todoItem";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgForOf, MatIcon],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() todoItems: TodoItem[] = [];
  sorted = false;

  sort() {
    if(!this.sorted){
      this.todoItems = this.todoItems.sort((a,b) => a.title.localeCompare(b.title));
    } else {
      this.todoItems = this.todoItems.sort((a,b) => a.key.localeCompare(b.key));
    }

    this.sorted = !this.sorted;
  }
}

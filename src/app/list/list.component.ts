import {Component, Input} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {TodoItem} from "../../types/todoItem";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() todoItems: TodoItem[] = [];
  @Input() removeItem?: (item: TodoItem) => void;
}

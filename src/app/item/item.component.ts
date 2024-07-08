import {Component, Input} from '@angular/core';
import {TodoItem} from "../../types/todoItem";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() todoItem?: TodoItem;
}

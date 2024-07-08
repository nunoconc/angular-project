import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TodoItem} from "../types/todoItem";
import {AddComponent} from "./add/add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  todoItems: TodoItem[] = [
    {
      title: 'example',
      description: 'this is the description'
    },
    {
      title: 'example',
      description: 'this is the description'
    }
  ];
}

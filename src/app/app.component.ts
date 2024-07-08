import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TodoItem} from "../types/todoItem";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
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

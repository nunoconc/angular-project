import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoItem} from "../../types/todoItem";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  todoItem: TodoItem =  {
    title: '',
    description: '',
}

  onSubmit() {
    console.log('Name: %s, Description: %s', this.todoItem.title, this.todoItem.description);
  }
}

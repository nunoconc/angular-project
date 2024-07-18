import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
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
  title = '';
  description = '';


  constructor(private todoItemService: TodoItemStorageService) {}

  onSubmit() {
    if(!!this.description && !!this.title){
      this.todoItemService.addItem({
        key:  Date.now().toString(),
        title: this.title,
        description: this.description,
        date: new Date().toDateString(),
        done: false,
      });

      this.title = '';
      this.description = '';
    }
  }
}

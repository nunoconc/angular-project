import { Injectable } from '@angular/core';
import {TodoItem} from "../types/todoItem";

@Injectable({
  providedIn: 'root' // Single instance service configuration
})
export class TodoItemStorageService {

  constructor() {}

  key = 'todo-list-storage';

  get(): TodoItem[] {
    const list = sessionStorage.getItem(this.key);
    return list ? JSON.parse(list) : [];
  }

  save(list: TodoItem[]): void {
    sessionStorage.setItem(this.key, JSON.stringify(list));
  }

  remove(): void {
    sessionStorage.removeItem(this.key);
  }
}

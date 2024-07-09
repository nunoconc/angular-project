import { Injectable, EventEmitter } from '@angular/core';
import {TodoItem} from "../types/todoItem";

@Injectable({
  providedIn: 'root' // Single instance service configuration
})
export class TodoItemStorageService {

  constructor() {}

  key = 'todo-list-storage';
  eventEmitter = new EventEmitter<TodoItem[]>();

  register(callback: (items: TodoItem[]) => void) {
    this.eventEmitter.subscribe((list)=>{
      callback(list);
    })

    this.eventEmitter.emit(this.getAllItems())
  }

  getAllItems(): TodoItem[] {
    const list = sessionStorage.getItem(this.key);
    return list ? JSON.parse(list) : [];
  }

  addItem(item: TodoItem): void {
    const list = this.getAllItems();

    list.push(item);
    sessionStorage.setItem(this.key, JSON.stringify(list));

    this.eventEmitter.emit(list);
  }

  removeItem(item: TodoItem): void {
    const list = this.getAllItems();

    const filteredList = list.filter(it=> it.key !== item.key);
    sessionStorage.setItem(this.key, JSON.stringify(filteredList));

    this.eventEmitter.emit(filteredList);
  }
}

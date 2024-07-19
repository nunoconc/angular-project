import {Injectable} from "@angular/core";
import {TodoItem} from "../types/todoItem";

@Injectable({
  providedIn: 'root' // Single instance storage configuration
})
export class TodoItemStorage {

  constructor() {}

  key = 'todo-list-storage';

  loadItems(): TodoItem[] {
    const list = sessionStorage.getItem(this.key);

    return list ? JSON.parse(list) : [];
  }

  storeItems(list: TodoItem[]) {
    sessionStorage.setItem(this.key, JSON.stringify(list));
  }
}

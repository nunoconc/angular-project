import { Injectable, EventEmitter } from '@angular/core';
import { TodoItem } from "../types/todoItem";
import {TodoItemStorage} from "../storage/todoItemStorage";

@Injectable({
  providedIn: 'root' // Single instance service configuration
})
export class TodoItemService {

  constructor(private todoItemStorage: TodoItemStorage) { }

  eventEmitter = new EventEmitter<TodoItem[] | undefined>();
  sorted = false;
  filtered = false;

  setOptions(sort: boolean, filter: boolean) {
    this.sorted = sort;
    this.filtered = filter;

    this.eventEmitter.emit();
  }

  optionsList(list: TodoItem[]) {
    return list
      .filter(item => !this.filtered || !item.done )
      .sort((a, b) => this.sorted ? a.title.localeCompare(b.title) : a.key.localeCompare(b.key));
  }

  register(callback: (items: TodoItem[]) => void) {
    this.eventEmitter.subscribe((todoItems) => {
      const list = this.optionsList(todoItems || this.todoItemStorage.loadItems());

      callback(list);
    })

    this.eventEmitter.emit();
  }
  
  addItem(item: TodoItem): void {
    const list = this.todoItemStorage.loadItems();
    list.push(item);

    this.todoItemStorage.storeItems(list);
    this.eventEmitter.emit(list);
  }

  updateItem(item: TodoItem): void {
    const list = this.todoItemStorage.loadItems();
    const filteredList = list.filter(it => it.key !== item.key);
    filteredList.push(item);

    this.todoItemStorage.storeItems(filteredList);
    this.eventEmitter.emit(filteredList);
  }

  removeItem(item: TodoItem): void {
    const list = this.todoItemStorage.loadItems();
    const filteredList = list.filter(it => it.key !== item.key);

    this.todoItemStorage.storeItems(filteredList);
    this.eventEmitter.emit(filteredList);
  }
}

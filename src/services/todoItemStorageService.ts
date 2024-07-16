import { Injectable, EventEmitter } from '@angular/core';
import { TodoItem } from "../types/todoItem";

@Injectable({
  providedIn: 'root' // Single instance service configuration
})
export class TodoItemStorageService {

  constructor() { }

  key = 'todo-list-storage';
  eventEmitter = new EventEmitter<TodoItem[]>();
  sorted = false;


  setSort(sort: boolean) {
    this.sorted = sort;

    const list = this.sortList(this.getAllItems());

    this.eventEmitter.emit(list);
  }

  sortList(list: TodoItem[]) {
    return this.sorted ? list.sort((a, b) => a.title.localeCompare(b.title)) : list;
  }

  register(callback: (items: TodoItem[]) => void) {
    this.eventEmitter.subscribe((list) => {
      callback(list);
    })

    this.eventEmitter.emit(this.getAllItems())
  }

  getAllItems(): TodoItem[] {
    const list = sessionStorage.getItem(this.key);
  
    return list ? JSON.parse(list) : [];
  }

  addItem(item: TodoItem): void {
    var list = this.getAllItems();

    list.push(item);
    sessionStorage.setItem(this.key, JSON.stringify(list));

    this.eventEmitter.emit(this.sortList(list));
  }

  removeItem(item: TodoItem): void {
    const list = this.getAllItems();

    const filteredList = list.filter(it => it.key !== item.key);
    sessionStorage.setItem(this.key, JSON.stringify(filteredList));

    this.eventEmitter.emit(filteredList);
  }

  doneItem(item: TodoItem): void {
    const list = this.getAllItems();

    const mappedList = list.map(it => {
      if(it.key === item.key) {
        it.done = !it.done;
      }
      
      return it;
    });

    sessionStorage.setItem(this.key, JSON.stringify(mappedList));

    this.eventEmitter.emit(mappedList);
  }
}

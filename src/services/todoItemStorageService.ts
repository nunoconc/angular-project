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
  filtered = false;


  setOptions(sort: boolean, filter: boolean) {
    this.sorted = sort;
    this.filtered = filter;

    const list = this.optionsList(this.getAllItems());

    this.eventEmitter.emit(list);
  }

  optionsList(list: TodoItem[]) {
    return list
    .filter(item => !this.filtered || !item.done )
    .sort((a, b) => this.sorted ? a.title.localeCompare(b.title) : a.key.localeCompare(b.key));
  }

  filterList(list: TodoItem[]){
    return this.filtered ? list.filter((item) => item.done) : list;
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

    this.eventEmitter.emit(this.optionsList(list));
  }

  updateItem(item: TodoItem): void {
    var list = this.getAllItems();

    const filteredList = list.filter(it => it.key !== item.key);

    filteredList.push(item);
    sessionStorage.setItem(this.key, JSON.stringify(filteredList));

    this.eventEmitter.emit(this.optionsList(filteredList));
  }

  removeItem(item: TodoItem): void {
    const list = this.getAllItems();

    const filteredList = list.filter(it => it.key !== item.key);
    sessionStorage.setItem(this.key, JSON.stringify(filteredList));

    this.eventEmitter.emit(this.optionsList(filteredList));
  }
}

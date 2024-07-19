import { Injectable, EventEmitter } from '@angular/core';
import { TodoItem } from "../types/todoItem";
import {TodoItemStorage} from "../storage/todoItemStorage";
import {Options} from "../types/options";
import {OptionsStorage} from "../storage/optionsStorage";

@Injectable({
  providedIn: 'root' // Single instance service configuration
})
export class TodoItemService {

  constructor(private todoItemStorage: TodoItemStorage, private optionsStorage: OptionsStorage) { }

  eventEmitter = new EventEmitter<TodoItem[] | undefined>();

  getOptions(): Options {
    return this.optionsStorage.loadOptions();
  }

  setOptions(options: Options): void {
    this.optionsStorage.storeOptions(options);
    this.eventEmitter.emit();
  }

  optionsList(list: TodoItem[]) {
    const { filtered, sorted } = this.optionsStorage.loadOptions();
    return list
      .filter(item => !filtered || !item.done )
      .sort((a, b) => sorted ? a.title.localeCompare(b.title) : a.key.localeCompare(b.key));
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

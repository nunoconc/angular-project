import {Injectable} from "@angular/core";
import {Options} from "../types/options";

@Injectable({
  providedIn: 'root' // Single instance storage configuration
})
export class OptionsStorage {

  constructor() {}

  key = 'todo-options-storage';

  loadOptions(): Options {
    const options = sessionStorage.getItem(this.key);

    return options ? JSON.parse(options) : {
      filtered: false,
      sorted: false
    };
  }

  storeOptions(options: Options): void {
    sessionStorage.setItem(this.key, JSON.stringify(options));
  }
}

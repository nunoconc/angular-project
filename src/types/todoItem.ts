export interface TodoItem {
  key: string;
  title: string;
  description: string;
}

export function createTodoItem(): TodoItem {
  return {
    key: Date.now().toString(),
    title: '',
    description: '',
  }
}

export interface TodoItem {
    id: number,
    title: string,
    date: string
}

export interface TodoItemsSchema {
    todos: TodoItem[],
}
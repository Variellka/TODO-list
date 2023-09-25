export interface TodoItem {
    title: string,
    date: string
}

export interface TodoItemsSchema {
    todos: TodoItem[]
}
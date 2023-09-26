import { TodoItemsSchema } from "../entity";
import { AddTodoSchema } from "../features/AddTodo/types";

export interface StateSchema {
    todoItems: TodoItemsSchema,
    addTodo?: AddTodoSchema
}
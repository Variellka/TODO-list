import { TodoItemsSchema } from "../widgets/TodoWidget/types";
import { AddTodoSchema } from "../features/AddTodo/types";

export interface StateSchema {
    todoItems: TodoItemsSchema,
    addTodo?: AddTodoSchema
}
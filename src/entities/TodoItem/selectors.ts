import { StateSchema } from "../../app/StateSchema";

export const getTodoItems = ((state: StateSchema) => state.todoItems.todos);

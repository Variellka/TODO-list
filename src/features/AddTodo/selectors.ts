import { StateSchema } from "../../app/StateSchema";

export const getAddTodo = ((state: StateSchema) => state.addTodo?.text);

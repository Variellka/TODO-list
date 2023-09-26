import { createSlice } from '@reduxjs/toolkit';
import { TodoItem, TodoItemsSchema } from './types'; 

const initialState: TodoItemsSchema = {
    todos: []
};

export const todoItemsSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 0,
                title: action.payload,
                date: new Date().toString()
            })
        },
        deleteToDo: (state, action) => {
            let { todos } = state;
            state.todos = todos.filter((item : TodoItem) => 
                item.id !== action.payload);
          },
    },
});

export const { actions: todoItemsActions } = todoItemsSlice;
export const { reducer: todoItemsReducer } = todoItemsSlice;

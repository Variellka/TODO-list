import { createSlice } from '@reduxjs/toolkit';
import { TodoItemsSchema } from './types'; 

const initialState: TodoItemsSchema = {
    todos: []
};

export const todoItemsSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload,
                date: new Date().toString()
            })
        },
    },
});

export const { actions: todoItemsActions } = todoItemsSlice;
export const { reducer: todoItemsReducer } = todoItemsSlice;

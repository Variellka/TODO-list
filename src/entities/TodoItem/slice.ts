import { createSlice } from '@reduxjs/toolkit';
import { TodoItemsSchema } from './types'; 

const initialState: TodoItemsSchema = {
    todos: [
        {
            title: 'Ant Design Title 1',
            date: '25.09.2023'
        },
        {
            title: 'Ant Design Title 2',
            date: '25.09.2023'
        },
        {
            title: 'Ant Design Title 3',
            date: '25.09.2023'
        },
        {
            title: 'Ant Design Title 4',
            date: '25.09.2023'
        },
      ]
};

export const todoItemsSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
    },
});

export const { actions: todoItemsActions } = todoItemsSlice;
export const { reducer: todoItemsReducer } = todoItemsSlice;

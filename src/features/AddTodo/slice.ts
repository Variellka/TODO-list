import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddTodoSchema } from './types'; 

const initialState: AddTodoSchema = {
    text: ''
};

export const addTodoSlice = createSlice({
    name: 'addTodo',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addTodoActions } = addTodoSlice;
export const { reducer: addTodoReducer } = addTodoSlice;

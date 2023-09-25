import { configureStore } from '@reduxjs/toolkit'
import { todoItemsReducer } from '../widgets/TodoWidget/slice'
import { addTodoReducer } from '../features/AddTodo/slice'

export const store = configureStore({
  reducer: {
      todoItems: todoItemsReducer,
      addTodo: addTodoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
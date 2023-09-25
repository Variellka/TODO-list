import { configureStore } from '@reduxjs/toolkit'
import { todoItemsReducer } from '../entities/TodoItem/slice'

export const store = configureStore({
  reducer: {
      todoItems: todoItemsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
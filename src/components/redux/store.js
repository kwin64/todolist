import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from './slices/todolistSlice'

const store = configureStore({
	reducer: {
		todolist: todolistReducer
	}
})

export default store

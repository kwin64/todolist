import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todolistSlice = createSlice({
	name: 'todolists',
	initialState: {
		todolists: [],
		currentFilter: 'all'
	},
	reducers: {
		addTask(state, action) {
			state.todolists.unshift({
				id: uuidv4(),
				title: action.payload.title,
				status: false
			})
		},
		removeTask(state, action) {
			state.todolists = state.todolists.filter(todo => todo.id !== action.payload.id)
		},
		changeStatusTask(state, action) {
			state.todolists.map(todo =>
				todo.id === action.payload.id ? (todo.status = !todo.status) : todo
			)
		},
		changeTitleTask(state, action) {
			state.todolists.map(todo =>
				todo.id === action.payload.id ? (todo.title = action.payload.title) : todo
			)
		},
		filteredTasks(state, action) {
			state.currentFilter = action.payload.filter
		}
	}
})

export const { addTask, removeTask, changeStatusTask, filteredTasks, changeTitleTask } =
	todolistSlice.actions
export default todolistSlice.reducer

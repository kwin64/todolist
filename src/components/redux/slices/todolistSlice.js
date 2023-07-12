import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todolistSlice = createSlice({
	name: 'todolists',
	initialState: {
		todolists: [
			{ id: uuidv4(), title: 'test', status: false },
			{ id: uuidv4(), title: 'test2', status: false },
			{ id: uuidv4(), title: 'test3', status: false }
		],
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
		filteredTasks(state, action) {
			state.currentFilter = action.payload.filter
		}
	}
})

export const { addTask, removeTask, changeStatusTask, filteredTasks } = todolistSlice.actions
export default todolistSlice.reducer

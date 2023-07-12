import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredTasks } from '../redux/slices/todolistSlice'
import './Filter.scss'

const Filter = () => {
	const currentFilter = useSelector(state => state.todolist.currentFilter)
	const dispatch = useDispatch()

	const filterHandler = filter => {
		dispatch(filteredTasks({ filter }))
	}

	return (
		<div className='filter'>
			<div
				className={currentFilter === 'all' ? 'filter__item_all_active' : 'filter__item_all'}
				onClick={() => filterHandler('all')}>
				All
			</div>
			<div
				className={
					currentFilter === 'active' ? 'filter__item_active_active' : 'filter__item_active'
				}
				onClick={() => filterHandler('active')}>
				Active
			</div>
			<div
				className={
					currentFilter === 'completed' ? 'filter__item_complete_active' : 'filter__item_complete'
				}
				onClick={() => filterHandler('completed')}>
				Completed
			</div>
		</div>
	)
}
export default Filter

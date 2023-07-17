import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_ITEMS } from '../../constants'
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
			{FILTER_ITEMS.map((item, index) => (
				<div
					key={index}
					className={
						currentFilter === item ? `filter__item_${item}_active` : `filter__item_${item}`
					}
					onClick={() => filterHandler(item)}>
					{item[0].toUpperCase() + item.slice(1)}
				</div>
			))}
		</div>
	)
}
export default Filter

import { Card, Checkbox } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditableTitle from '../common/editableTitle/EditableTitle'
import { changeStatusTask, changeTitleTask, removeTask } from '../redux/slices/todolistSlice'
import './Todolist.scss'

const Todolist = () => {
	let todolists = useSelector(state => state.todolist.todolists)
	const currentFilter = useSelector(state => state.todolist.currentFilter)
	const dispatch = useDispatch()

	const changeStatus = id => {
		dispatch(changeStatusTask({ id }))
	}

	const changeTitle = (id, title) => {
		dispatch(changeTitleTask({ id, title }))
	}

	const revomeTask = id => {
		dispatch(removeTask({ id }))
	}

	if (currentFilter === 'active') {
		todolists = todolists.filter(task => task.status !== true)
	} else if (currentFilter === 'completed') {
		todolists = todolists.filter(task => task.status === true)
	}

	return (
		<div className='todolists'>
			{todolists.map(todo => {
				return (
					<Card
						key={todo.id}
						className='todolist'>
						<Checkbox
							className='todolist__status'
							checked={todo.status}
							onChange={() => changeStatus(todo.id)}></Checkbox>
						<EditableTitle
							todo={todo}
							revomeTask={revomeTask}
							changeTitle={changeTitle}
						/>
					</Card>
				)
			})}
		</div>
	)
}
export default Todolist

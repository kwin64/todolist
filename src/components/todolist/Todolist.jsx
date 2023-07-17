import { Card, Checkbox } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditableTitle from '../common/editableTitle/EditableTitle'
import { changeStatusTask, changeTitleTask, removeTask } from '../redux/slices/todolistSlice'
import './Todolist.scss'

const Todolist = () => {
	let todolists = useSelector(state => state.todolist.todolists)
	const currentFilter = useSelector(state => state.todolist.currentFilter)
	const dispatch = useDispatch()

	const changeStatus = useCallback(
		id => {
			dispatch(changeStatusTask({ id }))
		},
		[dispatch]
	)

	const changeTitle = useCallback(
		(id, title) => {
			dispatch(changeTitleTask({ id, title }))
		},
		[dispatch]
	)

	const revomeTask = useCallback(
		id => {
			dispatch(removeTask({ id }))
		},
		[dispatch]
	)

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

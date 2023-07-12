import { DeleteOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatusTask, removeTask } from '../redux/slices/todolistSlice'
import './Todolist.scss'

const Todolist = () => {
	let todolists = useSelector(state => state.todolist.todolists)
	const currentFilter = useSelector(state => state.todolist.currentFilter)

	const dispatch = useDispatch()

	const changeStatus = id => {
		dispatch(changeStatusTask({ id }))
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
			{todolists.map(({ id, title, status }) => (
				<Card
					key={id}
					className='todolist'>
					<Checkbox
						className='todolist__status'
						checked={status}
						onChange={() => changeStatus(id)}></Checkbox>
					<div className='todolist__title'>{title}</div>
					<Button
						className='btn'
						icon={<DeleteOutlined />}
						onClick={() => revomeTask(id)}
					/>
				</Card>
			))}
		</div>
	)
}
export default Todolist

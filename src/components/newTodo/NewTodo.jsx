import { Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Filter from '../filter/Filter'
import { addTask } from '../redux/slices/todolistSlice'
import './NewTodo.scss'

const NewTodo = () => {
	const [valueInput, setValueInput] = useState('')
	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(addTask({ title: valueInput }))
		setValueInput('')
	}

	const handleOnKeyPress = e => {
		if (e.keyCode === 13 && e.currentTarget.value.length && e.currentTarget.value.trim().length) {
			onClickHandler()
		}
	}

	const onChangeInput = e => {
		setValueInput(e.target.value)
	}

	return (
		<div className='newTodo'>
			<Input
				autoFocus
				placeholder='New task'
				onKeyDown={handleOnKeyPress}
				value={valueInput}
				onChange={onChangeInput}
			/>
			<div className='filter__desktop'>
				<Filter />
			</div>
		</div>
	)
}
export default NewTodo

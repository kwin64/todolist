import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
		if (e.keyCode === 13 && valueInput) {
			onClickHandler()
		}
	}

	const onChangeInput = e => {
		setValueInput(e.target.value)
	}

	return (
		<div className='newTodo'>
			<Input
				placeholder='New task'
				onKeyDown={handleOnKeyPress}
				value={valueInput}
				onChange={onChangeInput}
			/>
			<Button
				icon={<PlusOutlined />}
				onClick={onClickHandler}
			/>
		</div>
	)
}
export default NewTodo

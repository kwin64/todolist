import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useState } from 'react'
import ButtonCommon from '../button/ButtonCommon'
import './EditableTitle.scss'

export const EditableTitle = ({ todo, changeTitle, revomeTask }) => {
	const [newTitle, setNewTitle] = useState('')
	const [editableMode, setEditableMode] = useState(false)
	const [error, setError] = useState(false)

	const onChangeTitleHandler = e => {
		setNewTitle(e.currentTarget.value)
	}

	const handleOnKeyPress = e => {
		if (e.keyCode === 13 && e.currentTarget.value.length && e.currentTarget.value.trim().length) {
			changeTitle(todo.id, newTitle)
			setEditableMode(false)
		}
	}

	const handleOnBlur = () => {
		if (newTitle.trim().length) {
			changeTitle(todo.id, newTitle)
			setEditableMode(false)
		} else {
			setError(true)
		}
	}

	const activateEditModeHandler = () => {
		setEditableMode(true)
		setNewTitle(todo.title)
	}

	return (
		<div className='editableTitle'>
			{editableMode ? (
				<>
					<Input
						placeholder={error ? 'Enter value' : undefined}
						className={'input'}
						autoFocus
						value={newTitle}
						onChange={onChangeTitleHandler}
						onKeyDown={handleOnKeyPress}
						onBlur={handleOnBlur}
					/>
				</>
			) : (
				<>
					<span className='title'>{todo.title}</span>
					<div className='btns'>
						<ButtonCommon
							styles={'btn__change'}
							icon={<EditOutlined />}
							onClickHandler={activateEditModeHandler}
						/>
						<ButtonCommon
							styles={'btn__remove'}
							icon={<DeleteOutlined />}
							onClickHandler={() => revomeTask(todo.id)}
						/>
					</div>
				</>
			)}
		</div>
	)
}
export default EditableTitle

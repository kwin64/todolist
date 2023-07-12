import React from 'react'
import NewTodo from '../newTodo/NewTodo'
import Todolist from '../todolist/Todolist'
import './Main.scss'

const Main = () => {
	return (
		<div className='content'>
			<NewTodo />
			<Todolist />
		</div>
	)
}
export default Main

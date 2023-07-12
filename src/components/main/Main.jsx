import React from 'react'
import Filter from '../filter/Filter'
import NewTodo from '../newTodo/NewTodo'
import Todolist from '../todolist/Todolist'
import './Main.scss'

const Main = () => {
	return (
		<div className='content'>
			<NewTodo />
			<Filter />
			<Todolist />
		</div>
	)
}
export default Main

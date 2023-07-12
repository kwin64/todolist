import React from 'react'
import Filter from '../filter/Filter'
import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<span>Todo List</span>
			<div className='filter__mobile'>
				<Filter />
			</div>
		</div>
	)
}
export default Header

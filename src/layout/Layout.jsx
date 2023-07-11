import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import './Layout.scss'

const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}
export default Layout

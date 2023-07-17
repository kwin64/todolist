import React from 'react'
import Main from '../components/main/Main'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
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

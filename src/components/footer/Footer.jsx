import React from 'react'
import './Footer.scss'

const Footer = () => {
	const dateObj = new Date()
	const year = dateObj.getUTCFullYear()

	return (
		<div className='footer'>
			Copyright {year} © Developed by &nbsp;
			<a
				href='https://github.com/kwin64'
				target='_blank'
				rel='noreferrer'>
				Eugene Y.
			</a>
		</div>
	)
}
export default Footer

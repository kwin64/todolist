import React from 'react'
import { Button } from 'antd'

const ButtonCommon = ({ styles, icon, onClickHandler }) => {
	return (
		<Button
			className={styles}
			icon={icon}
			onClick={() => onClickHandler()}
		/>
	)
}
export default ButtonCommon

import React, { useCallback, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

// const style = {
// 	table: {
// 		borderCollapse: 'collapse'
// 	},
// 	tableCell: {
// 		border: '1px solid gray',
// 		margin: 0,
// 		padding: '5px 10px',
// 		width: 'max-content',
// 		minWidth: '150px'
// 	},
// 	form: {
// 		container: {
// 			padding: '20px',
// 			border: '1px solid #F0F8FF',
// 			borderRadius: '15px',
// 			width: 'max-content',
// 			marginBottom: '40px'
// 		},
// 		inputs: {
// 			marginBottom: '5px'
// 		},
// 		submitBtn: {
// 			marginTop: '10px',
// 			padding: '10px 15px',
// 			border: 'none',
// 			backgroundColor: 'lightseagreen',
// 			fontSize: '14px',
// 			borderRadius: '5px'
// 		}
// 	}
// }

// function PhoneBookForm({ addEntryToPhoneBook }) {
// 	const [initDataForm, setInitDataForm] = useState({
// 		userFirstname: 'Coder',
// 		userLastname: 'Byte',
// 		userPhone: '8885559999'
// 	})
// 	const onChangeHandler = ({ currentTarget: { name, value } }) => {
// 		setInitDataForm(prevState => ({
// 			...prevState,
// 			[name]: value
// 		}))
// 	}
// 	const resetFormHanlder = () => {
// 		setInitDataForm(prevState => ({
// 			...prevState,
// 			userFirstname: '',
// 			userLastname: '',
// 			userPhone: ''
// 		}))
// 	}

// 	return (
// 		<form
// 			onSubmit={e => {
// 				e.preventDefault()
// 				// if (
// 				// 	initDataForm.userFirstname.trim() ||
// 				// 	initDataForm.userLastname.trim() ||
// 				// 	initDataForm.userPhone.trim()
// 				// ) {
// 				addEntryToPhoneBook(initDataForm)
// 				resetFormHanlder()
// 				// }
// 				// resetFormHanlder()
// 			}}
// 			style={style.form.container}>
// 			<label>First name:</label>
// 			<br />
// 			<input
// 				style={style.form.inputs}
// 				className='userFirstname'
// 				name='userFirstname'
// 				type='text'
// 				value={initDataForm.userFirstname}
// 				onChange={onChangeHandler}
// 			/>
// 			<br />
// 			<label>Last name:</label>
// 			<br />
// 			<input
// 				style={style.form.inputs}
// 				className='userLastname'
// 				name='userLastname'
// 				type='text'
// 				value={initDataForm.userLastname}
// 				onChange={onChangeHandler}
// 			/>
// 			<br />
// 			<label>Phone:</label>
// 			<br />
// 			<input
// 				style={style.form.inputs}
// 				className='userPhone'
// 				name='userPhone'
// 				type='text'
// 				value={initDataForm.userPhone}
// 				onChange={onChangeHandler}
// 			/>
// 			<br />
// 			<input
// 				style={style.form.submitBtn}
// 				className='submitButton'
// 				type='submit'
// 				value='Add User'
// 			/>
// 		</form>
// 	)
// }

// function InformationTable({ users }) {
// 	return (
// 		<table
// 			style={style.table}
// 			className='informationTable'>
// 			<thead>
// 				<tr>
// 					<th style={style.tableCell}>First name</th>
// 					<th style={style.tableCell}>Last name</th>
// 					<th style={style.tableCell}>Phone</th>
// 				</tr>
// 				{users.map(({ userFirstname, userLastname, userPhone }, index) => (
// 					<tr key={index}>
// 						<td style={style.tableCell}>{userFirstname}</td>
// 						<td style={style.tableCell}>{userLastname}</td>
// 						<td style={style.tableCell}>{userPhone}</td>
// 					</tr>
// 				))}
// 			</thead>
// 		</table>
// 	)
// }

// function Application(props) {
// 	const [users, setUsers] = useState([])

// 	const addEntryToPhoneBook = newUser => {
// 		setUsers(prevState => [...prevState, { ...newUser }])
// 	}
// 	const sortedUsersTable = users.sort((a, b) =>
// 		a.userLastname.toUpperCase() < b.userLastname.toUpperCase()
// 			? -1
// 			: a.userLastname.toUpperCase() > b.userLastname.toUpperCase()
// 			? 1
// 			: 0
// 	)

// 	return (
// 		<section>
// 			<PhoneBookForm
// 				addEntryToPhoneBook={addEntryToPhoneBook}
// 				setUsers={setUsers}
// 			/>
// 			<InformationTable users={sortedUsersTable} />
// 		</section>
// 	)
// }

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<Application />)

// const rowStyle = {
// 	display: 'flex'
// }

// const squareStyle = {
// 	width: '60px',
// 	height: '60px',
// 	backgroundColor: '#ddd',
// 	margin: '4px',
// 	display: 'flex',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	fontSize: '20px',
// 	color: 'white'
// }

// const boardStyle = {
// 	backgroundColor: '#eee',
// 	width: '208px',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// 	display: 'flex',
// 	flexWrap: 'wrap',
// 	border: '3px #eee solid'
// }

// const containerStyle = {
// 	display: 'flex',
// 	alignItems: 'center',
// 	flexDirection: 'column'
// }

// const instructionsStyle = {
// 	marginTop: '5px',
// 	marginBottom: '5px',
// 	fontWeight: 'bold',
// 	fontSize: '16px'
// }

// const buttonStyle = {
// 	marginTop: '15px',
// 	marginBottom: '16px',
// 	width: '80px',
// 	height: '40px',
// 	backgroundColor: '#8acaca',
// 	color: 'white',
// 	fontSize: '16px'
// }

// function Square({ area, winner, player, onClickAreaHandler }) {
// 	const onClickHandler = () => {
// 		!winner && onClickAreaHandler(area)
// 	}

// 	return (
// 		<div
// 			className='square'
// 			style={squareStyle}
// 			onClick={onClickHandler}>
// 			{player}
// 		</div>
// 	)
// }

// function Board({ winner, board, onClickAreaHandler, resetGame, count }) {
// 	return (
// 		<div
// 			style={containerStyle}
// 			className='gameBoard'>
// 			<div
// 				id='statusArea'
// 				className='status'
// 				style={instructionsStyle}>
// 				Next player: <span>{!winner ? (count % 2 === 0 ? 'X' : 'O') : ''}</span>
// 			</div>
// 			<div
// 				id='winnerArea'
// 				className='winner'
// 				style={instructionsStyle}>
// 				Winner: <span>{!winner ? 'None' : winner}</span>
// 			</div>
// 			<button
// 				style={buttonStyle}
// 				onClick={resetGame}>
// 				Reset
// 			</button>
// 			<div style={boardStyle}>
// 				{board.map((player, idArea) => {
// 					return (
// 						<Square
// 							key={idArea}
// 							area={idArea}
// 							player={player}
// 							onClickAreaHandler={onClickAreaHandler}
// 							winner={winner}
// 						/>
// 					)
// 				})}
// 			</div>
// 		</div>
// 	)
// }

// function Game() {
// 	const [count, setCount] = useState(0)
// 	const [winner, setWinner] = useState('')
// 	const [board, setBoard] = useState(Array(9).fill(null))
// 	const winningLines = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6]
// 	]

// 	const resetGame = () => {
// 		setBoard(Array(9).fill(null))
// 		setCount(0)
// 		setWinner('')
// 	}

// 	const isWinner = () => {
// 		for (let i = 0; i < winningLines.length; i++) {
// 			const [a, b, c] = winningLines[i]
// 			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
// 				return setWinner(board[a])
// 			}
// 		}
// 		return null
// 	}

// 	const onClickAreaHandler = idArea => {
// 		if (!board[idArea]) {
// 			setCount(count + 1)
// 			board[idArea] = count % 2 === 0 ? 'X' : 'O'
// 			isWinner()
// 		} else {
// 			return
// 		}
// 	}

// 	return (
// 		<div className='game'>
// 			<div className='game-board'>
// 				<Board
// 					count={count}
// 					board={board}
// 					onClickAreaHandler={onClickAreaHandler}
// 					resetGame={resetGame}
// 					winner={winner}
// 				/>
// 			</div>
// 		</div>
// 	)
// }
function App() {
	const [isLoading, setIsLoading] = useState(true)

	// Имитация динамической пагинации
	useEffect(() => {
		const fetchData = async () => {
			// Здесь выполняется логика загрузки данных

			// Имитация задержки
			await new Promise(resolve => setTimeout(resolve, 3000))

			// Завершение загрузки данных
			setIsLoading(false)
		}

		fetchData()
	}, [])

	// Обработка стилей для body в зависимости от состояния загрузки
	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}, [isLoading])
	return (
		<div>
			{/* Ваш контент страницы */}
			<p>Some content here...</p>

			{/* Блок с прокруткой для динамической пагинации */}
			<div style={{ width: '300px', height: '900px', overflow: 'auto', border: '1px solid red' }}>
				{/* Ваш контент для динамической пагинации */}
				{isLoading ? <p>Loading...</p> : null}
			</div>
		</div>
	)
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

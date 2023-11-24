import './App.css'

import {useCallback, useState} from "react";
import {isWinSituation} from "./utils/Logic.js";
import TicTacToeBoard from "./components/TicTacToeBoard.jsx";

const initialBoard = ['','','','','','','','','']

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [board, setBoard] = useState(initialBoard)
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState('')
  
  const reset = () => {
    setBoard(Array(9).fill(''))
    setCurrentPlayer('O')
    setIsGameOver(false)
    setWinner('')
  }
  
  const handleCellClick = useCallback((index) => {
    if (winner.trim() !== '' || isGameOver) return
    
    if(board[index].trim() !== '') return
  
    let newBoard = board
    newBoard[index] = currentPlayer
    
    if(currentPlayer === 'X') {
      setCurrentPlayer('O')
    } else {
      setCurrentPlayer('X')
    }
    
    setBoard(newBoard)
    
    if(isWinSituation(board, currentPlayer, index)) {
      setWinner(currentPlayer)
      return
    }
    
    if(newBoard.indexOf('') === -1) {
      setIsGameOver(true)
    }
  }, [board, currentPlayer, isGameOver])
  
  return (
    <>
        <h1>Tic Tac Toe</h1>
        <TicTacToeBoard onCellClick={handleCellClick} board={board} />
        {winner.trim() !== '' && <p>The winner is {winner}</p>}
        {isGameOver && <p>Game Over. Tied</p>}
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

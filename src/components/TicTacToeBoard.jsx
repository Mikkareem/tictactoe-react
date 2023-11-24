import PropTypes from "prop-types";

const TicTacToeBoard = ({ board, onCellClick }) => {
    return <div className="sudoku-board">
        {board.map((value, index) => {
            return (
                <div
                    key={index}
                    className="sudoku-board-cell"
                    onClick={(e) => {
                        e.preventDefault()
                            onCellClick(index)
                    }}>
                    {value.trim() !== "" ? <p>{value}</p> : <></>}
                </div>
                )
        })}
    </div>
}

TicTacToeBoard.propTypes = {
    onCellClick: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired
}

export default TicTacToeBoard
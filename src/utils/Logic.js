function rowColDiagonalSame(board, index) {
    console.log(board)
    let currentRow = Math.floor(index / 3)
    let currentCol = index % 3

    // index is center, Check Diagonal & Antidiagonal
    if(currentRow === 1 && currentCol === 1) {
        if(isSame(board[index], board[index - 4], board[index + 4]) || isSame(board[index], board[index-2],board[index+2])) return true
    }

    // Below indices can be checkable in diagonal
    if(currentRow === currentCol) {
        if(isSame(board[0], board[4], board[8])) return true
    }

    // Below indices can be checkable in Antidiagonal
    if(Math.abs(currentRow-currentCol) === 2) {
        if(isSame(board[2], board[4], board[6])) return true
    }

    // Checking rows
    if(currentRow === 0) {
        if(isSame(board[0],board[1],board[2])) return true
    } else if(currentRow === 1) {
        if(isSame(board[3], board[4], board[5])) return true
    } else if(currentRow === 2) {
        if(isSame(board[6], board[7], board[8])) return true
    }

    // Checking Columns
    if(currentCol === 0) {
        if(isSame(board[0],board[3],board[6])) return true
    } else if(currentCol === 1) {
        if(isSame(board[1], board[4], board[7])) return true
    } else if(currentCol === 2) {
        if(isSame(board[2], board[5], board[8])) return true
    }

    return false
}

function isSame(one, two, three) {
    if(one.trim() === '' || two.trim() === '' || three.trim() === '') return false
    return (one === two && one === three && two === three)
}

export function isWinSituation(board, currentPlayer, index) {
    let newBoard = board
    newBoard[index] = currentPlayer

    return rowColDiagonalSame(newBoard, index)
}
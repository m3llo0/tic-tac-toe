class Gameboard{
    constructor(){
        this.grid = [
            [1, 2, 3],  // Row 1
            [4, 5, 6],  // Row 2
            [7, 8, 9],  // Row 3
          ];
    }

    updateBoard(row, col, symbol){
        this.grid[row][col] = symbol
    }

    createGrid(){
        for (let i = 0; i < 9; i++){
            const cell = document.createElement("div")
            cell.className = "cell"
            const container = document.querySelector(".grid")
            container.appendChild(cell)
    
    }
}
}

class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }
}

class Game{
    constructor(){
        this.gameboard = new Gameboard()
        this.turn = 0
    }

    checkWin(){
        //check rows
        for(let row=0; row<3; row++){
            if(this.gameboard.grid[row][0] == this.gameboard.grid[row][1] && this.gameboard.grid[row][1] == this.gameboard.grid[row][2]) {
                console.log("WIN")
                return true
            }
        }

        //check columns
        for(let col=0; col<3; col++){
            if(this.gameboard.grid[0][col] == this.gameboard.grid[1][col] && this.gameboard.grid[1][col] == this.gameboard.grid[2][col]){
                console.log("WIN")
                return true
            }
        }

        //check diagonals
        if(this.gameboard.grid[0][0] == this.gameboard.grid[1][1] && this.gameboard.grid[1][1] == this.gameboard.grid[2][2]){
            console.log("WIN")
            return true
        } else if (this.gameboard.grid[0][2] == this.gameboard.grid[1][1] && this.gameboard.grid[1][1] == this.gameboard.grid[2][0]){
            console.log("WIN")
            return true
        }
    }
    
    checkDraw(){
        if(this.turn === 9){
            console.log("DRAW")
            return true
        } else {
            return false
        }
    }

}
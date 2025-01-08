class Gameboard{
    constructor(game){
        this.grid = [
            [1, 2, 3],  // Row 1
            [4, 5, 6],  // Row 2
            [7, 8, 9],  // Row 3
          ]
        this.gridElement = document.querySelector(".grid")
        this.game= game
    }
    
    createBoard(){
        for(let row=0; row <=2; row++){
            for(let col=0; col<=2; col++){
                const cell = document.createElement("div")
                cell.className = "cell"
                cell.dataset.row = row //helps to assign identify each cell
                cell.dataset.col = col
                this.gridElement.appendChild(cell)
            }
        }
        }

    retrieveData(){
            this.gridElement.addEventListener("click", (event) => {
                const row = parseInt(event.target.dataset.row)
                const col = parseInt(event.target.dataset.col)
                console.log(row,col)
                this.game.makeMove(row,col)
        })
    }

    updateBoard(row, col, symbol){
            this.grid[row][col] = symbol
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
        this.gameboard = new Gameboard(this)
        this.turn = 0
        this.player1 = new Player("Myself", "X")
        this.player2 = new Player("Opponent", "O")
    }

    checkWin(){
        //check rows
        for(let row=0; row<=2; row++){
            if(this.gameboard.grid[row][0] === this.gameboard.grid[row][1] && this.gameboard.grid[row][1] === this.gameboard.grid[row][2]) {
                console.log("WIN")
                return true
            }
        }

        //check columns
        for(let col=0; col<=2; col++){
            if(this.gameboard.grid[0][col] === this.gameboard.grid[1][col] && this.gameboard.grid[1][col] === this.gameboard.grid[2][col]){
                console.log("WIN")
                return true
            }
        }

        //check diagonals
        if(this.gameboard.grid[0][0] === this.gameboard.grid[1][1] && this.gameboard.grid[1][1] === this.gameboard.grid[2][2]){
            console.log("WIN")
            return true
        } else if (this.gameboard.grid[0][2] === this.gameboard.grid[1][1] && this.gameboard.grid[1][1] === this.gameboard.grid[2][0]){
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

    makeMove(row, col){
        if (this.gameboard.grid[row][col]!= "X" && this.gameboard.grid[row][col]!= "O"){
            this.gameboard.updateBoard(row, col, this.turn % 2 == 0 ? "X":"O")
        } else {
            console.log("pick again")
            return
        }
        this.checkWin()
        this.checkDraw()
        this.turn += 1
    }
}
const game= new Game()
game.gameboard.createBoard() //initialise gameboard
game.gameboard.retrieveData()

/*game.makeMove(0, 0); // X
game.makeMove(0, 1); // O
game.makeMove(1, 0); // X
game.makeMove(1, 0); // O - Repeat
game.makeMove(1, 1); // X
game.makeMove(2, 0); // X - This should trigger a win*/


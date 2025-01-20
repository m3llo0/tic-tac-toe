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
                cell.dataset.row = row //helps to assign identity each cell
                cell.dataset.col = col
                cell.style.display = "flex"
                cell.style.justifyContent = "center"
                cell.style.alignItems = "center"
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
            const img = document.createElement("img")
            img.height = 100
            img.width = 100
            const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
            this.grid[row][col] = symbol
            if(symbol == "X"){
                img.src = "assets/x.png"
                cell.appendChild(img)

            } else{
                img.src = "assets/o.png"
                cell.appendChild(img)
            }
    }


}

class Player{
    constructor(symbol){
        this.symbol = symbol
    }
}

class Game{
    constructor(){
        this.gameboard = new Gameboard(this)
        this.turn = 0
        this.player1 = new Player("X")
        this.player2 = new Player("O")
        this.win = false
    }

    checkWin(){
        //check rows
        for(let row=0; row<=2; row++){
            if(this.gameboard.grid[row][0] === this.gameboard.grid[row][1] && this.gameboard.grid[row][1] === this.gameboard.grid[row][2]) {
                this.win = true
                this.displayResults()
            }
        }

        //check columns
        for(let col=0; col<=2; col++){
            if(this.gameboard.grid[0][col] === this.gameboard.grid[1][col] && this.gameboard.grid[1][col] === this.gameboard.grid[2][col]){
                this.win = true
                this.displayResults()
            }
        }

        //check diagonals
        if(this.gameboard.grid[0][0] === this.gameboard.grid[1][1] && this.gameboard.grid[1][1] === this.gameboard.grid[2][2]){
            this.win = true
            this.displayResults()
        } else if (this.gameboard.grid[0][2] === this.gameboard.grid[1][1] && this.gameboard.grid[1][1] === this.gameboard.grid[2][0]){
            this.win = true
            this.displayResults()
        }
    }

    checkDraw(){
        if (this.turn == 8){
            this.displayResults()
        }
    }

    makeMove(row, col){
        if (this.gameboard.grid[row][col]!= "X" && this.gameboard.grid[row][col]!= "O"){
            this.gameboard.updateBoard(row, col, this.turn % 2 == 0 ? "O":"X")
        } else {
            return
        }
        this.checkWin()
        this.checkDraw()
        this.turn += 1
    }

    displayResults(){
       const result = document.createElement("div")
       const body = document.querySelector("body")
       result.className = "result"
       body.appendChild(result)
       const resultText = document.createElement("p")
       if (this.win == true){
            resultText.innerText = `${this.turn % 2 === 0 ? "O" : "X"} wins!`}
        else{
            resultText.innerText = "It's a Draw"}
       result.appendChild(resultText)
       const restart = document.createElement("button")
       restart.className = "restart"
       restart.innerText = "Restart"
       result.appendChild(restart)
       this.restartGame()
    }


    restartGame(){
        const restartButton = document.querySelector(".restart")
        const cells = document.querySelectorAll(".cell")
        const result = document.querySelector(".result")
        restartButton.addEventListener("click", () => {
            cells.forEach(cell =>{
                cell.remove()
            })
            this.turn = 0
            this.win = false
            this.gameboard.createBoard()
            this.gameboard.retrieveData()
            result.remove()
            this.gameboard.grid = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ];
        })
    }
}
const game= new Game()
game.gameboard.createBoard() //initialise gameboard
game.gameboard.retrieveData()



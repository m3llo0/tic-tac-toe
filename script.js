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

    checkWin(){
        //check rows
        for(let row=0; row<3; row++){
            if(this.grid[row][0] == this.grid[row][1] && this.grid[row][1] == this.grid[row][2]) {
                return true
            }
        }

        //check columns
        for(let col=0; col<3; col++){
            if(this.grid[0][col] == this.grid[1][col] && this.grid[1][col] == this.grid[2][col]){
                return true
            }
        }

        //check diagonals
        if(this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2]){
            return true
        } else if (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0]){
            return true
        } else {
            return false
        }
    }

}

class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }

    makeMove(){
    }
}

class Game{
    constructor(){
        this.gameboard = new Gameboard()
        
    }

    getPosition(row, col){
        return this.gameboard.grid[row][col];
    }


}
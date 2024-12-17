class Gameboard{
    constructor(){
        this.grid = [
            [1, 2, 3],  // Row 1
            [4, 5, 6],  // Row 2
            [7, 8, 9],  // Row 3
          ];
    }
    getPosition(row, col){
        return this.grid[row][col];
    }

}

class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }

}


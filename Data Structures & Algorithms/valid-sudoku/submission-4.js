class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      let rm = [];
      let cm = [];
      let bm = [];
      for(let i = 0; i < board.length; i++) {
        rm.push(new Map());
        cm.push(new Map());
        bm.push(new Map());
      } 
      for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let box = Math.floor(i/3) * 3 + Math.floor(j/3);
            if(board[i][j] != ".") {
            if(rm[i].get(board[i][j]) || cm[j].get(board[i][j]) || bm[box].get(board[i][j])) {
                console.log(i, j, box);
                console.log(board[i][j])
                return false;
            } else {
                rm[i].set(board[i][j], 1)
                cm[j].set(board[i][j], 1)
                bm[box].set(board[i][j], 1)
                }
            }
        }
      }

      return true;
    }
}

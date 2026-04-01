class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(g) {
        let ret = 0;
        let grid = g;
        let expand = function(i,j) {
            if(i < 0 || i  >= grid.length || j < 0 || j>= grid[i].length || grid[i][j] == "0") return;
            //console.log(i, j, grid[i][j])
            if(grid[i][j] == "1") {
                 grid[i][j] = "0";
                 //console.log("updated", grid[i][j])
            }
            expand(i - 1, j);
            expand(i + 1, j);
            expand(i, j + 1);
            expand(i, j - 1);
            return;
        }

        for(let i = 0; i < g.length; i++) {
            for(let j = 0; j < g[i].length; j++) {
                if(grid[i][j] == "1") {
                    //console.log(i, j)
                    ret++;
                    expand(i, j);
                }
            }
        }
        return ret;
    }
}

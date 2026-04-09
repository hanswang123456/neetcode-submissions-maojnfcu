class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        let build = function(i, j, dist) {
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
            if(grid[i][j] == 0 || grid[i][j] < dist || grid[i][j] == -1) return;

            //console.log(i, j)

            grid[i][j] = Math.min(dist, grid[i][j]);

            //console.log(grid);

            // traverse sides
            build(i + 1, j, dist + 1);
            build(i - 1, j, dist + 1);
            build(i, j - 1, dist + 1);
            build(i, j + 1, dist + 1);

            return;
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] == 0) {
                     build(i+1,j, 1);
                     build(i-1,j, 1);
                     build(i,j + 1, 1);
                     build(i,j - 1, 1);
                }
            }
        }

        return grid;
    }
}

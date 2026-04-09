class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;

        let expand = function(i, j, size) {
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0) return size;
            grid[i][j] = 0;
            let left = expand(i - 1, j, size); 
            let right = expand(i + 1, j, size); 
            let top = expand(i, j - 1, size); 
            let bottom = expand(i, j + 1, size); 

            console.log(i,j, left, right, top, bottom)
            return left + right + top + bottom + 1;
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] == 1) {
                    max = Math.max(max, expand(i, j, 0));
                }
            }
        }

        return max;

    }
}

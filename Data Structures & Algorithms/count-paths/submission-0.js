class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array(m).fill(Array(n).fill(0));
        dp[0][0] = 1;

        for(let i = 0; i < m; i++) {
            for(let j = 1; j < n; j++) {
                if(i == 0) {
                dp[i][j] = dp[i][j - 1];
                } else {
                    dp[i][j] = dp[i - 1][j] +  dp[i][j - 1];
                }
            }
        }

        return dp[m - 1][n - 1]
    }
}

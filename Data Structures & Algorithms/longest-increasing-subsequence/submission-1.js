class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = Array(nums.length).fill(0);

        dp[0] = 1;

        for(let i  = 0; i < dp.length; i++) {
            let max = 0;
            for(let j = 0; j < dp.length; j++) {
                if(dp[j] > max && nums[j] < nums[i]) {
                    max = dp[j];
                }
            }
            dp[i] = max + 1;
        }
        let ret = 0;
        for(let j = 0; j < dp.length; j++) {
            if(dp[j] > ret) {
                ret = dp[j];
            }
        }

        return ret;
    }
}

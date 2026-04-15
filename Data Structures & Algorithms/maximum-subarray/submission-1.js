class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let dp = Array(nums.length).fill(-Math.Infinity);
        dp[0] = nums[0];
        for(let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        }   
        let ret = dp[0];
        for(let i = 0; i < dp.length; i++) {
            ret = Math.max(dp[i], ret);
        }
        return ret;
    }
}

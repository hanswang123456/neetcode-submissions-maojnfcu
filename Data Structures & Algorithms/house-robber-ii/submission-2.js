class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 1) return nums[0];

        let robFirst = Array(nums.length).fill(0);
        let robSecond = Array(nums.length).fill(0);

        robFirst[0] = nums[0];
        robFirst[1] = Math.max(nums[0], nums[1]);

        robSecond[1] = nums[1];

        for(let i = 0; i < nums.length; i++) {
            if(i > 1) {
                robFirst[i] = Math.max(robFirst[i - 2] + nums[i], robFirst[i - 1]);
                robSecond[i] = Math.max(robSecond[i - 2] + nums[i], robSecond[i - 1]);
            }
        }

        console.log(robFirst, robSecond)

        return Math.max(robFirst[nums.length - 2], robSecond[nums.length - 1])
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let ret = Array(nums.length).fill(0);
        ret[0] = nums[0];
        ret[1] = Math.max(nums[0], nums[1]);
        for(let i = 0; i < nums.length; i++) {
            if(i > 1)
            ret[i] = Math.max(ret[i - 2] + nums[i], ret[i - 1]);

            //console.log(ret[i]);
        }

        return ret[nums.length - 1];
    }
}

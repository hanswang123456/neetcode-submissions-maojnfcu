class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let residual = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            if(residual < nums[i]) {
                residual = nums[i] - 1;
            } else if(residual > 0) {
                residual--;
            } else {
                return false;
            }
        }
        return true;
    }
}

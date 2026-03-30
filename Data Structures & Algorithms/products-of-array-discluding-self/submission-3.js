class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left  = [nums[0]];
        let right = [nums[nums.length - 1]];

        for(let i = 1; i < nums.length; i++) {
            left.push(left[i - 1] * nums[i]);
            right.unshift(right[0] * nums[nums.length - i - 1])
        }

        for(let i = 0; i < nums.length; i++) {
            if(i == 0) { nums[i] = right[i + 1]}
            else if(i == nums.length - 1) {nums[i] = left[i - 1]}
            else {nums[i] = left[i - 1] * right[i + 1]}
        }
    return nums;
    }
}

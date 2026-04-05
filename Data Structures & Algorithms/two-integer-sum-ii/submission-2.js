class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let l = 0;
       let r = nums.length - 1;

       while(l < r) {
        if(nums[l] + nums[r] > target) {
            r--;
        } else if(nums[l] + nums[r] < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
       }



    }
}

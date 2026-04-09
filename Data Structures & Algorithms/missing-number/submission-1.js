class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let tot = 0;

        for(let i = 0; i < nums.length + 1; i++) {
            tot+=i;
        }
        for(let i = 0; i < nums.length; i++) {
            tot-=nums[i];
        }

        return tot;
    }
}

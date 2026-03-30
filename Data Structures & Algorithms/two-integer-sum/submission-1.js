class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let m = new Map();

        for(let i = 0; i < nums.length; i++) {
            if(!m.get(nums[i])) m.set(nums[i],i )
        }

        for(let j = 0; j < nums.length; j++) {
            if(m.get(target - nums[j])) {
                let i = m.get(target - nums[j]);
                if(i!=j) {
                return [i, j]
                }
            }
        }
    }
}

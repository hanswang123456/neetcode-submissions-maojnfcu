class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ret = [];
        let tracker = new Map();

        let recurse = function(index, values, total) {
            //console.log(index, values, total)
            if(total > target || index == nums.length) return;
            if(total == target) {
                ret.push([...values]);
                return;
            }

            values.push(nums[index]);
            total+=nums[index];
            recurse(index + 1, values, total);
            total-=nums[index];
            values.pop();

            values.push(nums[index]);
            total+=nums[index];
            recurse(index, values, total);
            total-=nums[index];
            values.pop();

            recurse(index + 1, values, total);

        }

        recurse(0, [], 0);
        ret = Array.from(
  new Set(ret.map(JSON.stringify)),
  JSON.parse
);
        return ret;
    }
}

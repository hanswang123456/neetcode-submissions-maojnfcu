class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];

        let recurse = function(numbers, perm) {
            // console.log(numbers, perm);
            if(perm.length == nums.length) {
                result.push([...perm]);
                return;
            }

            for(let i = 0; i < numbers.length; i++) {
                perm.push(numbers[i]);
                let kept = numbers[i];
                numbers.splice(i, 1);
                recurse(numbers, perm);
                numbers.splice(i, 0, kept);
                perm.pop();
            }

        }

        recurse([...nums], []);

        return result;
    }
}

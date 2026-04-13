class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ret = 0;
        let count = 0;
        for(let n of nums) {
            if(n == 1) {
                count++;
            } else {
                ret = Math.max(ret, count);
                count = 0;
            }
        }
        return Math.max(ret ,count);
    }
}

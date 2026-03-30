class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let m = new Map();
        for(let n of nums) {
            if(m.get(n)){
                return true;
            } else {
                m.set(n, 1);
            }
        }
        return false;
    }
}

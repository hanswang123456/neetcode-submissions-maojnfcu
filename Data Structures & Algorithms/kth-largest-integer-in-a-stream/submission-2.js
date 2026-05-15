class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.val = nums;
        this.val = this.val.sort((a,b) => b - a);
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.val.push(val);
        this.val = this.val.sort((a,b) => b - a)
        return this.val[this.k - 1];
    }
}

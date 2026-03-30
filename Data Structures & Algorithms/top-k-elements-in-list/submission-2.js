class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = new Map();

        for(let n of nums) {
            if(m.get(n)) {
                let cur = m.get(n);
                let update = cur+1;
                m.set(n, update);
            } else {
                m.set(n, 1);
            }
        }

        let transformed = [];
        for(let [k, v] of m) {
            transformed.push([v, k]);
        }

        transformed = transformed.sort((a,b) =>  b[0]- a[0])

        let returned = [];

        for(let i = 0; i < k; i++) {
            returned.push(transformed[i][1])
        }

        return returned;
    }
}

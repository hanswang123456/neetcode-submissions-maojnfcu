class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n == 1) return 1;
        if(n == 2) return 2;
        if(n == 3) return 3;

        let ret = [1,2,3];

        for(let i = 3; i < n; i++) {
            ret.push(ret[i - 1] + ret[i - 2])
        }

        console.log(ret);

        return ret[ret.length - 1];


    }
}

class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n == 0) return 1;
        let ret = 1;
        if(n < 0) {
            for(let i = n; i <0; i++) {
                ret/=x;
            }
        } else {
            for(let i = 0; i <n; i++) {
                ret*=x;
            }
        }
        return ret;
    }
}

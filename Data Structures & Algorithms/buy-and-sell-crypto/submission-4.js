class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let a1 = [];
        let lm = 100;

        for(let i = 0; i < prices.length; i++) {
            lm = Math.min(prices[i], lm);
            console.log(lm, prices[i])
            a1.push(lm);
        }

        console.log(a1);

        let m = 0;
        let a2 = Array(prices.length).fill(-Math.Infty);
        for(let i = prices.length - 1; i>=0; i--) {
            m = Math.max(m, prices[i])
            a2[i] = m;
        }

        console.log(a1, a2);


        let ret = 0;
        for(let j = 0; j < prices.length; j++) {
            ret = Math.max(a2[j] - a1[j], ret)
        }
        return ret;
    }
}

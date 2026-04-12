class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let ret = Array(cost.length).fill(0);
        ret[0] = cost[0];
        ret[1] = cost[1];

        for(let i = 0; i < cost.length; i++) {
            if(i > 1) ret[i] = Math.min(ret[i - 1] + cost[i], ret[i - 2] + cost[i]);
            console.log(ret[i])
        }

        return Math.min(ret[cost.length - 1], ret[cost.length - 2]);

    }
}
class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let ret = [];
        intervals = intervals.sort((a,b) => a[0] - b[0])
        for(let i = 0; i < intervals.length; i++) {
            let cur = intervals[i];
            if(ret.length == 0) {
                ret.push(cur);
            } else {
                let last = ret[ret.length -1];
                if(cur[0] <= last[1]) {
                    last[1] = Math.max(cur[1], last[1]);
                } else {
                    ret.push(cur);
                }
            }
        }

        return ret;
    }
}

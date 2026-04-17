class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let sorted = intervals.sort((a,b) => a[0] - b[0]);
        const n = intervals.length;
        let ret = 0;
        let prevEnd = intervals[0][1];

        for(let i=1; i < n; i++) {
            console.log(sorted[i], prevEnd)
            if(sorted[i][0] < prevEnd) {
                // overlap
                prevEnd = Math.min(prevEnd, sorted[i][1])
                ret++;
            } else {
                prevEnd = sorted[i][1];
            }

        }
        

       return ret;
    }
}

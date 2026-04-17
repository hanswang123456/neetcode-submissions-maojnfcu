class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if(intervals.length == 0) return [newInterval];
        
        for(let i = 1; i < intervals.length ; i++) {
            if(newInterval[0] >= intervals[i - 1][0] && newInterval[0] <= intervals[i][0]) {
                intervals.splice(i, 0, newInterval);
                newInterval = null;
                //console.log(intervals);
                break;
            }
        }
        if(newInterval) {
        if(newInterval[0] <= intervals[0][0]){
             intervals.unshift(newInterval);
        } else {
            intervals.push(newInterval);
        }
        }

        console.log(intervals);
        
        for(let i = 1; i < intervals.length; i++) {
            let cur = intervals[i];
            let prev = intervals[i - 1];
            if(prev[1] >= cur[0]) {
                intervals.splice(i, 1);
                prev[1] = Math.max(cur[1], prev[1]);
                prev[0] = Math.min(cur[0], prev[0])
                i--;
            }
        }
        return intervals
    }
}

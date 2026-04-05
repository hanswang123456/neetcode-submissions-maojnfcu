class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let left = 0; let right = heights.length - 1;

        while(left < right) {
            console.log(left, right, heights[left], heights[right]);
            let area =Math.min(heights[right], heights[left]) * (right - left);
            res = Math.max(res, area)
            if(heights[left] > heights[right]) {
                right--;
            } else if(heights[left] < heights[right]) {
                left++;
            } else {
                left++;
                right--;
            }
        }

        return res;
    }
}

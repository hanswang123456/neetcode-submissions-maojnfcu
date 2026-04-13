class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0; let right = nums.length - 1;

        while(left < right - 1) {
            let mid = Math.floor((right + left)/2)

            if(nums[left] < nums[mid] && nums[mid] < nums[right]) {
                right = mid - 1;
                console.log("left, middle right, cutting right")

            } else if(nums[left] > nums[mid] && nums[mid] > nums[right]) {
                left = mid + 1;
                console.log("right, middle left, cutting left")
            } else {
                if(nums[mid] >  nums[left] && nums[mid] > nums[right]) {
                if(nums[left] > nums[right]) {
                    left = mid;
                    console.log("right, left middle, cutting left")
                } else {
                    right = mid;
                    console.log("left, right, middle, cutting right")
                }
                } else {
                if(nums[left] > nums[right]) {
                    right = mid;
                    console.log("middle right, left, cutting right")
                } else {
                    right = mid;
                    console.log("middle, left, right, middle, cutting right")
                }
                }
            }
            console.log(left, right);
        }

        return Math.min(nums[right], nums[left])

    }
}

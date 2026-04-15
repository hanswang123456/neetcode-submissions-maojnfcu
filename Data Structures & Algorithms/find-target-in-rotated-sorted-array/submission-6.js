class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {

            let mid = Math.floor((left + right)/2);

              console.log(left, mid, right);
            if(nums[mid] == target) return mid;
            if(nums[left] == target) return left;
            if(nums[right] == target) return right;
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
                console.log("a")
            } else if(nums[mid] < target && target < nums[right]) {
                left = mid + 1;
                console.log("b")
            } else if (nums[mid] > target && target > nums[right]) {
                left = mid + 1;
                console.log("c")
            } else if(nums[mid] > target && nums[mid]  > nums[right]) {
                left = mid + 1;
                console.log("d");
            } else if(nums[mid]  < target && nums[mid] > nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
                console.log("e");

            }
        }
    return -1;
    }
}

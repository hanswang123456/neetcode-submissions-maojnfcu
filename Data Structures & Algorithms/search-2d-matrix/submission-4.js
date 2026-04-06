class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0; 
        let n = matrix.length - 1;
        let m = matrix[n].length - 1;
        let btm = n;

        let secondSearch;


        while(top <= btm) {
            let mid = Math.floor((top + btm)/2);

            if(top == btm && target >= matrix[mid][0] && target <= matrix[mid][m]) {
                console.log("already optimal")
                secondSearch = matrix[top];
                break;
            }
            if(matrix[mid][m] < target) {
                console.log("shifting top to middle")
                top = mid + 1;

            } else if(matrix[mid][0] > target) {
                btm = mid - 1
                console.log("shifting btm to middle")
            } else {

                console.log("found array")
                secondSearch = matrix[mid]; 
                break;
            }
        }

        console.log(secondSearch);

        if(!secondSearch) return false;

        let left = 0, right = matrix[0].length;

        while(left <= right) {
            let mid = Math.floor((left + right)/2)

            console.log(secondSearch[mid])
            if(secondSearch[mid] > target) {
                console.log("returned right to mid");
                right = mid - 1;
            } else if(secondSearch[mid] < target) {
                console.log("returned left to mid");
                left = mid + 1;
            } else if(secondSearch[mid] == target) {
                console.log("returned true");
                return true;
            } else {
                left++;
                right--;
            }
        }

        return false;
    }
}

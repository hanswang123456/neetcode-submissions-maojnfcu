class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let ret = [];

        for(let i = 0; i < numRows; i++) {
            let row = [1];
            for(let j = 1; j < i; j++) {
                row.push(ret[i - 1][j-1] + ret[i - 1][j]);
            }
            if(i > 0) row.push(1);
            ret.push(row)
        }
        return ret;
    }
}

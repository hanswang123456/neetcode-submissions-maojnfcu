class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ML = [0]
        let MR = [0]

        for(let i = 0; i < height.length; i++) {
            ML.push(Math.max(height[i], ML[i]));
        }
        for(let i = height.length - 1; i >=0; i--) {
            MR.unshift(Math.max(height[i], MR[0]));
        }
        ML.shift();
        MR = MR.splice(0, MR.length);

        /// console.log(ML, MR)

        let ret = 0;
        for(let i = 1; i < height.length - 1; i++) {
            let lm = ML[i - 1];
            let rm = MR[i + 1];
            let acc = Math.max(0, (Math.min(lm, rm) - height[i] ));
            ret+= acc;
            // console.log(acc, i, lm, rm, height[i])

            
        }
        return ret;
    }
}

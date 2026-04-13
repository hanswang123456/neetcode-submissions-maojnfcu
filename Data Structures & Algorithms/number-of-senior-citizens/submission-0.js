class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ret = 0;

        for(let code of details) {
            let age = Number(code.substring(11, 13));
            ret+= (age >60)
        }
        return ret;
    }
}

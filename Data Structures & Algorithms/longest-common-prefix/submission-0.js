class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = new Map();

        for(let i = 0; i < strs.length; i++) {
            for(let j = 0; j < strs[i].length; j++) {
                let substring = strs[i].substring(0, j + 1);
                if(!prefix.get(substring)) {
                    prefix.set(substring, 1);
                } else {
                    prefix.set(substring, prefix.get(substring) + 1);
                }
            }
        }
        
        let ret = "";

        for(let [key, count] of prefix) {
            if(count == strs.length && key.length > ret.length) ret = key;
        }

        return ret;

    }
}

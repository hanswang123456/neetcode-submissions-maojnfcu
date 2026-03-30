class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let m = new Map();

        for(let str of strs) {
            let sorted = str.split("").sort().join("");
            if(m.get(sorted)) {
                let cur = m.get(sorted);
                let update = [...cur];
                update.push(str);
                m.set(sorted, update);
            } else {
                m.set(sorted, [str])
            }
        }
        let ret = [];

        for(let [key, value] of m) {
            ret.push(value);
        }
        
        return ret;
    }
}

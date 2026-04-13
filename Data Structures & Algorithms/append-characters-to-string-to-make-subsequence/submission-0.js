class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let idx = 0;

        for(let c of s) {
            if(c === t[idx]) idx++;
            if(idx == t.length) return 0;
        }
        return t.length - idx;
    }
}

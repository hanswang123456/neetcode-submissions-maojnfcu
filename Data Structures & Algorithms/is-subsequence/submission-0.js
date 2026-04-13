class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let idx = 0;

        for(let i = 0; i < t.length; i++) {
            if(t[i] === s[idx]) idx++;
            if(idx == s.length) return true;
        }

        return false;

    }
}

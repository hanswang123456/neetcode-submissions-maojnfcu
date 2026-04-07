class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let ret = 0;

        let m = new Map();

        while(r < s.length) {
            if(m.get(s[r])) {
                // close left;
                while(m.get(s[r])) {
                    m.delete(s[l]);
                    l++;
                }
            } else {
                m.set(s[r], 1);
                r++;
            }
            ret = Math.max(r - l, ret);
            //console.log(r, l)
        }

        return ret;
    }
}

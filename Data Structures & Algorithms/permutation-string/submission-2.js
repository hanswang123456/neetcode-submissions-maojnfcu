class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let m = new Map();

        let checkMatch = function(dictionary) {
            let ret = 0;
            for(const [key, value] of dictionary) {
                if(value == 0) ret++;
            }

            return ret == m.size;
        }

        for(let i = 0; i < s1.length; i++) {
            let cur1 = s1[i];
            if(m.has(cur1)) {
                m.set(cur1, m.get(cur1) - 1);
            } else {
                m.set(cur1, -1)
            }
        }

        for(let i = 0; i < s1.length; i++) {
            let cur2 = s2[i];
            if(m.has(cur2)) {
                m.set(cur2, m.get(cur2) + 1);
            }
        }

        if(checkMatch(m)) return true;

        let left = 0;
        let right = s1.length;
        console.log(m);
        while(right < s2.length) {
            if(m.has(s2[left])) {
                m.set(s2[left], m.get(s2[left]) - 1)
            }

            if(m.has(s2[right])) {
                m.set(s2[right], m.get(s2[right]) + 1)
            }
            left++;
            right++;
            if(checkMatch(m)) return true;
        }

        return false;
    }

}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let m = new Map();

        for(let i = 0; i < s.length; i++) {
            if(m.get(s[i])) {
                let cur = m.get(s[i]);
                let update = cur + 1
                m.set(s[i], update);
            } else {
                m.set(s[i], 1)
            }
        }

        console.log(m);

        for(let i = 0 ; i < t.length; i++) {
            if(m.get(t[i])) {
                let cur = m.get(t[i]);
                let update = cur - 1
                m.set(t[i], update);
                if(update == 0) m.delete(t[i])

            } else {
                return false;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return ""
        let tMap = new Map();
        for(let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        let sMap = new Map();
        let matched = 0;
        let found = false;

        // Init window
        let left = 0; let right = 0
        let ret = s;
        while(right < s.length) {
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
            if(tMap.get(s[right]) && tMap.get(s[right]) == sMap.get(s[right])) {
                matched++;
            }
            while(matched == tMap.size) {
                if( sMap.get(s[left]) > (tMap.get(s[left]) || 0)) {
                    sMap.set(s[left], sMap.get(s[left]) - 1);
                    if(sMap.get(s[left]) == 0) sMap.delete(s[left])
                    left++;
                    }
                else {
                    break;
                }
            }

            // final check
            if(right - left < ret.length && matched == tMap.size){
                found = true;
                ret = s.substring(left, right + 1);
            }
            right++;
        }
    
    return found? ret: "";
    }
}

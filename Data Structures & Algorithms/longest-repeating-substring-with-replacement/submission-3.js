class Solution {
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let freq = new Map();
        let res = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            freq.set(char, (freq.get(char) || 0) + 1);

            maxFreq = Math.max(maxFreq, freq.get(char));

            while ((right - left + 1) - maxFreq > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
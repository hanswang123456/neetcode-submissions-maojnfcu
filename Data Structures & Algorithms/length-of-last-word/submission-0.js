class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim();

        let words = s.split(" ");
        let n = words.length;
        return words[n - 1].length;
    }
}

class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let ret = [];

        for(let i = 0; i< words.length; i++) {
            for(let j = 0; j < words.length; j++) {
                if(i !=j && words[j].includes(words[i]) && !ret.includes(words[i])) ret.push(words[i]);
            }
        }
        return ret;
    }
}

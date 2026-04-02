class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0; let right = s.length - 1;
        s = s.toLocaleLowerCase();
        while(left < right) {
            let codeL = s.charCodeAt(left);
            let codeR = s.charCodeAt(right);

            if (!(codeL > 47 && codeL < 58) && // numeric (0-9)
                !(codeL > 96 && codeL < 123)) { // lower alpha (a-z)
                left++;
            } else if (!(codeR > 47 && codeR < 58) && // numeric (0-9)
                !(codeR > 96 && codeR < 123)) {
                    right--;
            } else {
                if(s[left] != s[right]) {
                    return false;
                } else {
                    left++;
                    right--;
                }
            }
        }

        return true;
    }
}

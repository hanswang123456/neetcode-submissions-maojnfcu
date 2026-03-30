class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let check = s.split("");
        let cur = [];
        for(let i = 0; i < s.length; i++) {
            if(check[i] == "{"  | check[i] == "(" || check[i] == "[") {
                cur.push(check[i]);
            } else {
                let  prev = cur[cur.length - 1];
                if(prev == "{" && check[i]== "}") {
                    cur.pop();
                } else if(prev == "(" && check[i] == ")") {
                    cur.pop();
                } else if(prev == "[" && check[i] == "]") {
                    cur.pop();
                } else {
                    return false;
                }
            }
        }
        return cur.length == 0;
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        let check = function(r, sr) {
            if(!r && !sr) return true;

            if(!r || !sr) return false;

            if(r.val != sr.val) return false;
            let left = check(r.left, sr.left);
            let right = check(r.right, sr.right);

            return left && right;
        }
        let t = function(r, sr) {
            console.log(r, sr, r === sr)
            console.log("--------------------")
            if(!r) return false;

            let left = t(r.left, sr);
            let right = t(r.right, sr);
            let checked = false;
            if(r.val === sr.val) checked  = check(r, sr);

            return left || right || checked;
        }

        return t(root, subRoot);
    }
}

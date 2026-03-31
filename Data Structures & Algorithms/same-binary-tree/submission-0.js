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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let t = function(a,b) {
            if(!a && !b) return true;
            if(a && !b || b && !a) return false;

            let lc = t(a.left, b.left);
            let rc = t(a.right, b.right);

            return lc && rc && a.val == b.val;
        } 

        return t(p, q);
    }
}

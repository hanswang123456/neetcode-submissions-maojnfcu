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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        let ret = 0;
        let t = function(n, c) {
            if(!n) return c;

            let left = t(n.left, c);
            let right = t(n.right, c);

            ret = Math.max(left + right, ret);

            console.log(ret, left, right, n.val);

            return Math.max(left, right) + 1;
        }

        t(root, 0);
        return ret;
    }
}

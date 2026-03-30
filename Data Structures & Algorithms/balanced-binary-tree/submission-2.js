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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;
            let traverse = function(node, depth) {
                if(!node) return depth;
                if(!node.left && !node.right) return depth + 1;

                let ld = traverse(node.left, depth + 1);
                let rd = traverse(node.right, depth + 1);

                if(Math.abs(ld - rd) > 1) return -Math.Infty;
                return Math.max(ld, rd);
            }

        let result =  traverse(root, 0);
        return result > 0;

    }
}

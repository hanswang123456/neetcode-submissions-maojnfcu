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
     * @return {TreeNode}
     */
    invertTree(root) {
        let traverse = function(node) {
            if(!node) return null;
            let lt = traverse(node.left);
            let rt = traverse(node.right);

            node.left = rt;
            node.right = lt;
            return node;
        }

        return traverse(root);

    }
}

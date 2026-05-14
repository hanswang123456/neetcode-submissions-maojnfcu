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
    goodNodes(root) {
        let ret = 0;

        let traverse = function(node, max) {
            if(!node) return;

            if(node.val >= max) {
                ret++;
            }
            let updated = Math.max(max, node.val);
            traverse(node.left, updated);
            traverse(node.right, updated);
        }

        traverse(root, root.val);

        return ret;

    }
}

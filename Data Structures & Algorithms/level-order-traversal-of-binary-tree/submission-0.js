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
     * @return {number[][]}
     */
    levelOrder(root) {
        let ret = [];

        let traverse = function(node, level) {
            if(!node) return null;
            if(ret.length - 1 < level) {
                ret.push([node.val])
            } else {
                ret[level].push(node.val);
            }
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }

        traverse(root, 0);

        return ret;
    }
}

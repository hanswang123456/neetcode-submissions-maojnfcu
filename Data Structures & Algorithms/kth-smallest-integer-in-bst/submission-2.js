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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;

        let traverse = function(node) {
            if(!node) return;
            


            traverse(node.left);
            count++;
            if(count == k) {
                 ret = node.val;
                return;
            }

            traverse(node.right);
        }
        
        let ret = null;

        traverse(root);

        return ret;
    }
}

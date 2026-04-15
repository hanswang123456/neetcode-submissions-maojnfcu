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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let ret = -1;
        let recurse = function(node) {
            if(!node) return false;
            
            let left = recurse(node.left);
            let right =  recurse(node.right);
            
            let cur = (node.val == p.val || node.val == q.val)
            if((left + right + cur) == 2) ret = node;
            //console.log(node.val, cur, left, right )
            return (cur || left || right); 
        }


        recurse(root);

        return ret;
    }
}

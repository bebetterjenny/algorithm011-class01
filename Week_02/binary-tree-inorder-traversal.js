/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const arr = [];
    traverse(root);
    return arr;

    function traverse(root) {
        if (root) {
            traverse(root.left);
            arr.push(root.val);
            traverse(root.right);
        }
    }
};
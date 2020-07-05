/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    const path = [];
    traverse(root);
    return path;
    function traverse(root) {
        if (root) {
            path.push(root.val);
            root.children.forEach(child => {
                traverse(child);
            });
        }
    }
};

var preorderTraversal = function(root) {
    const res = []
    function traversal (root) {
      if (root !== null) {
        res.push(root.val) // 访问根节点的值
        traversal(root.left) // 递归遍历左子树
        traversal(root.right) // 递归遍历右子树
      }
    }
    traversal(root)
    return res
  }
  
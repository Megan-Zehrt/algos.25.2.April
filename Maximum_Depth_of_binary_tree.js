// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.






/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Base case: If the node is null, return 0 (indicating no further depth)
    if (root === null) {
        return 0;
    }
    
    // Recursively calculate the maximum depth of the left and right subtrees
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    
    // Return the maximum depth of the current node, adding 1 to account for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};
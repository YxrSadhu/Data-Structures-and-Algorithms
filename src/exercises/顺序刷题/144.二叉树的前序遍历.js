/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (64.49%)
 * Likes:    318
 * Dislikes: 0
 * Total Accepted:    135.6K
 * Total Submissions: 204.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
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
var preorderTraversal = function(root) {
  // 方法一： 递归
  /*
  let res = [];
  function helper (root) {
    if(!root) return;
    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return res;
  */

  // 方法二：迭代
  // 颜色标记法，模拟系统栈
  // 时间复杂度、空间复杂度都是 O(n)
  if(!root) return [];
  const stack = [],
        res = [];
  stack.push({
    color: 'White',
    node: root
  })

  while(stack.length > 0) {
    const {color, node} = stack.pop();
    if(color === 'Gray') {
      res.push(node.val);
    } else {
      // 前序: 根左右
      // 入栈: 右左根
      node.right && stack.push({color: 'White', node: node.right});
      node.left && stack.push({color: 'White', node: node.left});
      stack.push({color: 'Gray', node});
    }
  }
  return res;
};
// @lc code=end


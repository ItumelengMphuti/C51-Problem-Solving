/*
Challenge:  Given a number and a binary tree ( not a Binary Search Tree! ):
    -  return True/true if the given number is in the tree
    -  return False/false if it isn't
Each node in the binary tree is either of this Node class or null:

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

Challenge can be found on: https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript
*/

// Solution
function search(n, root) {
  if (root === null) return false;
  if (root.value === n) return true;
  return search(n, root.left) || search(n, root.right);
}

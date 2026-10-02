class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head= null;
    this.current = null;
  }
}

function mergeTwoLists(list1, list2) {
    // to array
    if (!list1 && !list2) return null;

    let current = list1.head;
    let array1 = [];


    while (current.next) {
        array1.push(current.node);
        current = current.next;
    }

    let current2 = list2.head;
    let array2 = [];

    while (current2.next) {
        array2.push(current.node);
        current = current.next;
    }

    // new array
    const mergedArray = [...array1, ...array2];
    return mergedArray.sort((a, b) => a-b);
}

// testing
let node1 = new Node(1)
let node2 = new Node(2)

let list1 = new LinkedList(node1)
node1.next = node2;

let node11 = new Node(3)
let node22 = new Node(4)

let list2 = new LinkedList(node11) 
node11.next = node22;
mergeTwoLists();
// console.log(list1);


// example 1 3 5
// 2 4 6


// result
// 1 2 3 4 5 6 as a linked list and return head of new list
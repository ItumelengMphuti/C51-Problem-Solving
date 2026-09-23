function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0;
  // let current = head;

  while (head !== null) {
    count++;
    head = head.next;
  }

  return count;
}


const first = new Node(10);
const second = new Node(20);
const third = new Node(30);

first.next = second;
second.next = third;

console.log(length(first));

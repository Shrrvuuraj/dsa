class Node {
  ///this is node of a linked list
  constructor(value) {
    this.value = value;

    this.next = null;
  }
}

class Linkedlist {
  // this is linked list
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // if linked list is empty
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }

    this.length--;
    return temp;
  }
  unshift(value) {
    new Node(value);
  }
}
const myLinkedList = new Linkedlist(1);

//push method
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

myLinkedList.pop();
myLinkedList.pop();

console.log(myLinkedList);

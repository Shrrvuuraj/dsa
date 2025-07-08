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
    let first;
    if (this.head) {
      first = this.head;
    } else {
      first = null;
      this.tail = null;
    }
    let newNode = new Node(value);
    this.head = newNode;
    this.head.next = first;
    if (this.tail === 0) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;

    let oldNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }
  get(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (index < 0 || index >= this.length) return null;
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp == null) return false;
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }
    let before = this.get(index - 1);
    if (before == null) return false;
    let newNode = new Node(value);

    newNode.next = before.next;
    before.next = newNode;
    this.length++;
    return true;
  }
  size() {
    return this.length;
  }
  clear(){
    this.head=null
    this.tail=null
    this.length=0
  }
}
const myLinkedList = new Linkedlist(1);

//push method
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.unshift("newElement");
myLinkedList.unshift("newestElement");

console.log(myLinkedList.insert(0, "inserElement"));
console.log(myLinkedList.insert(1, "inserElement2"));
console.log(myLinkedList.clear())
console.log(myLinkedList);
// console.log(myLinkedList.getFirst());

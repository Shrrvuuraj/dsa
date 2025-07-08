class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const NewNode = new Node(value);
    this.head = NewNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    temp.prev = null;
    this.tail.next = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    let temp = new Node(value);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
      this.length++;
      return this;
    }
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    
    this.head = this.head.next;
    temp.next = null;
    this.head.prev = null;
    this.length--;
    return temp;
  }
}
let Doublyll = new DoublyLinkedList("hello");
Doublyll.push(0);
Doublyll.push("shrrvvuu");
Doublyll.push("anshul");
Doublyll.pop();
Doublyll.unshift("unshifted");
console.log(Doublyll);

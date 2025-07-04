class Node{///this is node of a linked list
    constructor(value){
        this.value=value;

        this.next=null;
    }
}

class Linkedlist{// this is linked list
    constructor(value){
        this.head= new Node(value);
        this.tail=this.head
        this.length=1
        

    }
    push(value){
        let newNode=new Node(value)
        if(!this.head){// if linked list is empty
            this.head=newNode;
            this.tail=newNode
        }

        this.tail.next=newNode
        this.tail=newNode;
        this.length++

    }
}
const myLinkedList=new Linkedlist(1);

//push method
myLinkedList.push(2)



console.log(myLinkedList)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    insertAtHead(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node
        this.size++
    }
    removeAtHead() {
        let temp = this.head;
        this.head = temp.next;
        this.size--
    }

    insertAt(index, data) {
        if (index === 0) {
            this.insertAtHead(data)
        } else {
            let node = new Node(data);
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next;
            curr.next = node
        }
    }

    print() {
        let temp = this.head;
        let arr = []
        while (temp) {
            arr.push(temp.data)
            temp = temp.next
        }
        return arr
    }


    removeAt(index) {
        if (index === 0) {
            this.removeAtHead(index)
        }
        let curr = this.head;
        for (let i = 1; i < index; i++) {
            curr = curr.next
        }
        curr.next = curr.next.next
    }

    search(item) {
        let temp = this.head;
        let count = 0;
        while (temp) {
            if (temp.data === item) {
                return `value found at -> ${count}`
            }
            temp = temp.next
            count++
        }
    }

    middle() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            temp = temp.next;
            count++
        }
        let mid = Math.floor(count / 2);
        let fake = this.head
        for (let i = 0; i < mid; i++) {
            fake = fake.next
        }
        return fake
    }
    // DELETING n th NODE FROM END OF THE LIST
    deleteNthEnd(n) {
        let c1 = 0;
        let temp = this.head
        while (temp) {
            c1++;
            temp = temp.next
        }

        if (n === c1) {
            let temp = this.head;
            return temp.next;
        } else {
            let target = Math.floor(c1 - n);
            let curr = this.head
            for (let i = 0; i < target - 1; i++) {
                curr = curr.next
            }
            curr.next = curr.next.next
        }
    }
}

let ll = new LinkedList();
ll.insertAtHead(10)
ll.deleteNthEnd(1)
console.log(ll.print())



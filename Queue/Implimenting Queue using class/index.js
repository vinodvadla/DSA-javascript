class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(ele) {
        this.queue.push(ele);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "the queue is empty"
        }
        else {
            this.queue.shift()
        }
    }
    isEmpty() {
        return this.size() === 0
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.size(); i++) {
            str += this.queue[i] + ", "
        }
        return str
    }
}

let myqueue = new Queue();
myqueue.enqueue(1)
myqueue.enqueue(12)
myqueue.enqueue(23);
myqueue.dequeue()

console.log(myqueue.printQueue())


class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function queuePeek(queue) {
  return queue.first.value;
}

function queueIsEmpty(queue) {
  if (queue.first === null) {
    return true;
  }
  return false;
}

function display(queue) {
  if (queue.first === null) {
    return [];
  }
  let display = [];
  let currNode = queue.first;
  while (currNode) {
    display.push(currNode.value);
    currNode = currNode.next;
  }
  return display;
}

module.exports = {Queue, queuePeek, queueIsEmpty, display };
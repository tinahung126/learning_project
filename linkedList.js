class Node {
  constructor (data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class Stack {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (data) {
    const node = new Node(data)
    if (this.length > 0) {
      this.tail.next = node
      node.prev = this.tail
    } else {
      this.head = node
    }

    this.tail = node
    this.length += 1
    return node
  }

  pop () {
    let removeNode = null
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      removeNode = this.head
      this.head = null
      this.tail = null
    } else {
      removeNode = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
      removeNode.prev = null
    }
    this.length -= 1
    return removeNode.data
  }

  size () {
    return this.length
  }
}
const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2

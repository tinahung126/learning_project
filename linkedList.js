class Node {
  constructor (data) {
    this.data = data
    this.next = null
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
    } else {
      this.head = node
    }
    this.tail = node
    this.length += 1
    return node
  }

  pop () {
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      return this.head
    } else {
      let currentNode = this.head
      let newTail = this.head
      while (currentNode.next) {
        newTail = currentNode
        currentNode = currentNode.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length -= 1
      return currentNode
    }
  }

  size () {
    return this.length
  }
}
// add size function
const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2

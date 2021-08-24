const myStack = new Stack()

function Stack () {
  this.head = null
  this.tail = null
  this.length = 0
}

function Node (data) {
  this.data = data
  this.next = null
}

// add push function
Stack.prototype.push = function (data) {
  let node = new Node(data)
  if (this.length > 0) {
    this.tail.next = node
  } else {
    this.head = node
  }
  this.tail = node
  this.length += 1
  console.log(this.head)
  return node
}

// add pop function
Stack.prototype.pop = function () {
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

// add size function
Stack.prototype.size = function () {
  return this.length
}

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2

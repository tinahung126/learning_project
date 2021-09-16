function fib (n) {
  if (n === 0 || n === 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

fib(0) // 0
fib(1) // 1
fib(2) // 1
fib(3) // 2
fib(4) // 3
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))

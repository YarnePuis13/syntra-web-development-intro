/** Class representing a Stack. */

class Stack {
  storage;

  constructor() {
    this.storage = [];
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    const currentValues = this.storage;
    currentValues.push(value);

    return this.storage;
  }

  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    const currentValues = this.storage;
    currentValues.pop();

    return this.storage;
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    return this.storage.slice(-1);
  }
}

const myStack = new Stack();

console.log(myStack);

/** Class representing a Queue.
 * @constructor
 */

class Queue {
  storage;

  constructor() {
    this.storage = [];
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this.storage.push(value);
    return this.storage;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    this.storage.shift();
    return this.storage;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this.storage[0];
  }
}

const myQueue = new Queue();
console.log(myQueue);

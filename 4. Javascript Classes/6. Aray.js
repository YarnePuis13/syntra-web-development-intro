/** Class representing an Aray, a fictional data structure similar to an array except that the underlying storage is a string */

class Aray {
  storage;

  constructor() {
    this.storage = "";
  }

  #parseStorage() {
    return this.storage.split(",").filter(Boolean);
  }
  /*
   * Pushes a value at the end of the aray
   * @param {string} value - the value to insert
   * @return {number} - the length of the aray
   */
  push(value) {
    const currentValues = (this.storage = this.storage
      .split(",")
      .filter(Boolean));
    currentValues.push(value);
    this.storage = currentValues.join(",");
  }
  /*
   * Pops off the last value of the aray
   * @return {string} value - the popped value
   */
  pop() {}
  /*
   * Returns the new aray with all the items modified by the function passed in
   * @return {number} - the length of the aray
   */
  map(cb) {
    const currentValues = this.#parseStorage();
    const newArray = [];
    for (const cv of currentValues) {
      newArray.push(cb(cv));
    }
    return newArray;
  }
  /*
   * Returns the length of the aray
   * @return {number} - the length of the aray
   */
  length() {}
}

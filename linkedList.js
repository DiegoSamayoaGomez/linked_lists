export const LinkedList = function () {
  let head = null;
  let size = 0;

  // Adds a new node containing value to the end of the list
  let append = (value) => {
    // If the head is empty, add it at the beginning
    if (head === null) {
      preppend(value);
    } else {
      // Otherwise, traverse the whole list at the end and add the new node
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node(value);
      size++;
    }
  };
  // Adds a new node containing value to the start of the list
  let preppend = (value) => {
    head = node(value, head);
    size++;
  };

  // Returns the total number of nodes in the list
  let getSize = () => size;

  // Returns the first node in the list
  let getHead = () => head.value;

  // Returns the last node in the list
  let getTail = () => {
    let current = head;
    while (current.next) {
      current = current.next;
      if (current.next === null) {
        return current.value;
      }
    }
  };

  // Returns the node at the given index
  let atIndex = (index) => {
    let current = head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
  };

  // Removes the last element from the list
  let pop = () => {
    if (!head) return "There is no head";

    let current = head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    size--;
  };

  // Returns true if the passed in value exists in the list, otherwise returns false
  let contains = (value) => {
    let current = head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
      if (current === null) {
        return false;
      }
    }
  };

  // Returns the index of the node containing value, or null if not found.
  let find = (value) => {
    if (contains(value)) {
      let current = head;
      let count = 0;
      while (current) {
        if (current.value === value) {
          return count;
        }
        count++;
        current = current.next;
      }
    } else {
      return null;
    }
  };

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console
  let toString = () => {
    let current = head;
    let textOfValue = "";
    while (current !== null) {
      textOfValue += ` (${current.value}) ->`;
      current = current.next;
    }
    return `${textOfValue} null`;
  };
  return {
    append,
    preppend,
    getSize,
    getHead,
    getTail,
    atIndex,
    pop,
    contains,
    find,
    toString,
  };
};

const node = function (value, next = null) {
  return { value, next };
};

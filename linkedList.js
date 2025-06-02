const LinkedList = function () {
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
        return current.value;
      }
      count++;
      current = current.next;
    }
  };
  return { append, preppend, getSize, getHead, getTail, atIndex };
};

const node = function (value, next = null) {
  return { value, next };
};

let instanceOfLinkedList = LinkedList();
//console.log(instanceOfLinkedList);
instanceOfLinkedList.preppend(1);
instanceOfLinkedList.append(5);
instanceOfLinkedList.preppend("Diego");
instanceOfLinkedList.append("Samayoa");
console.log(instanceOfLinkedList.getSize());
console.log(instanceOfLinkedList.getHead());
console.log(instanceOfLinkedList.getTail());
console.log(instanceOfLinkedList.atIndex(0));

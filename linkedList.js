const LinkedList = function () {
  let head = null;
  let size = 0;

  // Adds a new node containing value to the start of the list
  let preppend = (value) => {
    head = node(value, head);
    size++;
  };

  // Returns the total number of nodes in the list
  let getSize = () => size;

  // Returns the first node in the list
  let getHead = () => head.value;

  return { preppend, getSize, getHead };
};

const node = function (value, next = null) {
  return { value, next };
};

let instanceOfLinkedList = LinkedList();
//console.log(instanceOfLinkedList);
instanceOfLinkedList.preppend(1);
instanceOfLinkedList.preppend(5);
instanceOfLinkedList.preppend("Diego");
console.log(instanceOfLinkedList.getSize());
console.log(instanceOfLinkedList.getHead());

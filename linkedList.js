const LinkedList = function () {
  const head = null;
  const size = 0;
  return { head, size };
};

const Node = function (value, next = null) {
  const newValue = value;
  const newNext = next;

  return { newValue, newNext };
};

const instanceOfLinkedList = LinkedList();
console.log(instanceOfLinkedList);

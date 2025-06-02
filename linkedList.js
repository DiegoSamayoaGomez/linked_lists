const LinkedList = function () {
  let head = null;
  let size = 0;

  let preppend = (value) => {
    head = node(value, head);
    size++;
  };

  return { preppend };
};

const node = function (value, next = null) {
  return { value, next };
};

let instanceOfLinkedList = LinkedList();
//console.log(instanceOfLinkedList);
instanceOfLinkedList.preppend(1);
instanceOfLinkedList.preppend(5);

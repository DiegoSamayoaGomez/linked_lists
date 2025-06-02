# linked_lists
One of the most basic and fundamental data structures. Despite not being that necessary in JS, it is still a good practice to have a solid foundation. 

A linked list is composed of two main parts:
- `Node`: Contains a value and the location of the next node
- `List`: Manages the list and its operations

## Functions
- `append(value)`: adds a new node containing value to the end of the list
- `prepend(value)`: adds a new node containing value to the start of the list
- `size`: returns the total number of nodes in the list
- `head`: returns the first node in the list
- `tail`: returns the last node in the list
- `at(index)`: returns the node at the given index
- `pop`: removes the last element from the list
- `contains(value)`: returns true if the passed in value is in the list and otherwise returns false.
- `find(value)`: returns the index of the node containing value, or null if not found.
- `toString`: represents your LinkedList objects as strings, so you can print them out and preview them in the console.

## Usage
From the `main.js` import the `linkedList.js` file, create an instance of it an you will have access to the avaible functions.

Uncomment the code to see an example of each function implementation.
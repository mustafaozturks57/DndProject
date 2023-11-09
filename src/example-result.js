const result = {
  draggableId: "task-1",
  type: "TYPE",
  reason: "DROP",
  source: {
    droppableId: "column-1",
    index: 0
  },
  destination: {
    droppableId: "column-1",
    index: 1
  }
};

// user drops outside of a list
const anotherResult = {
  draggableId: "task-1",
  type: "TYPE",
  reason: "DROP",
  source: {
    droppableId: "column-1",
    index: 0
  },
  destination: null
};

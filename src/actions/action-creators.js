export const SWITCH_LIST = 'SWITCH_LIST';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK_COMPLETED = 'TOGGLE_TASK_COMPLETED';
export const ADD_LIST = 'ADD_LIST';

export const switchList = (listId) => ({
  type: SWITCH_LIST,
  listId
});

export const addTask = (listId, task) => ({
  type: ADD_TASK,
  listId,
  task
});


export const handleCompletedToggle = (activeListId, task) => ({
  type: TOGGLE_TASK_COMPLETED,
  activeListId,
  task
});

export const addList = (listName) => ({
  type: ADD_LIST,
  name: listName
})

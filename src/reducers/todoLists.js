import { ADD_TASK, TOGGLE_TASK_COMPLETED, ADD_LIST } from './../actions/action-creators';

const initialState = [{
    id: 1,
    name: 'Hiring',
    tasks: [
      {id: 1, text: 'Interview Christopher Hui', completed: false},
      {id: 2, text: 'Hire Christopher Hui', completed: false},
      {id: 3, text: 'Onboard Christopher Hui', completed: false}
    ]
  }, {
    id: 2,
    name: 'Home Improvement',
    tasks: []
  }
]

let taskId = 3;
const addTask = (todoList, task) => {
  taskId++;
  return Object.assign({}, todoList,
    {
      tasks: [...todoList.tasks, {id: taskId, text: task, completed: false}]
    }
  );
}

let listId = 2;
const addList = (listName) => {
  listId++;
  return {id: listId, name: listName, tasks: []};
}

const toggleTaskCompleted = (todoList, changedTask) => {
  const updatedTasks = todoList.tasks.map((task) => {
    if (task.id !== changedTask.id) {
      return task;
    }
    return Object.assign({}, task, {completed: !task.completed});
  });
  return Object.assign({}, todoList, {tasks: updatedTasks});
}

export default(state = initialState, payload) => {
  switch(payload.type) {

    case ADD_TASK:
      const addTaskState = state.map((list) => {
        if (list.id !== payload.listId) {
          return list;
        }
        return addTask(list, payload.task);
      });

      return addTaskState;
    case TOGGLE_TASK_COMPLETED:
      const taskCompleteState = state.map((list) => {
        if (list.id !== payload.activeListId) {
          return list;
        }
        return toggleTaskCompleted(list, payload.task)
      });

      return taskCompleteState;

    case ADD_LIST:
      return [...state, addList(payload.name)];
    default:
      return state;
  }
}

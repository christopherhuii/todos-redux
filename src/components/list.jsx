import React from 'react';

export default function List ({title = '' , todos = [], onCompletedToggle, onAddButtonClick}) {
  return (
    <div className="todos__list-container">
      <div className="todos__header">
        <h3 className="todos__heading">Todos</h3>
        <button className="todos__add-btn" onClick={onAddButtonClick}>+</button>
      </div>
      <ul className="todos__list">
        {todos.map((task) => {
          return (
            <li key={`task-${task.id}`} className="todos__task">
              <input
                className="todos__task-checkbox"
                type="checkbox"
                onClick={() => onCompletedToggle(task)}
                checked={task.completed}
              />
              {task.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

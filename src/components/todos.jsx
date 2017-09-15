import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchList, addTask, handleCompletedToggle, addList } from './../actions/action-creators';
import List from './list';
import './../styles/todos.css'
class Todos extends Component {
  state = {
    isTaskEditorVisible: false,
    isListEditorVisible: false
  };

  handleEnterClick = (e, type) => {
    if (e.key === 'Enter') {
      this.setState({
        [type]: false
      });

      if (type === 'isTaskEditorVisible') {
        this.props.handleAddTask(this.props.activeList, e.target.value);
      } else if (type === 'isListEditorVisible') {
        this.props.handleAddList(e.target.value);
      }
    }
  }

  handleCompletedToggle = (task) => {
    this.props.handleCompletedToggle(this.props.activeList, task);
  }

  showNewTaskEditor = (state) => {
    this.setState({
      [state]: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {todoLists, handleSwitchList} = this.props;
    if (todoLists.length !== prevProps.todoLists.length) {
      handleSwitchList(todoLists[todoLists.length - 1].id);
    }
  }

  render() {
    const { isTaskEditorVisible, isListEditorVisible } = this.state;

    return (
      <div className="todos">
        <div className="todos__sidebar">
          <div className="todos__header">
            <h3 className="todos__heading">Lists</h3>
            <button className="todos__add-btn" onClick={() => this.showNewTaskEditor('isListEditorVisible')}>+</button>
          </div>
          {isListEditorVisible ? (
            <input className="todos__editor" type="text" onKeyUp={e => this.handleEnterClick(e, 'isListEditorVisible')} />
          ) : null}
          <ul className="todos__sidebar-list">
            {this.props.todoLists.map((list) => {
              return (
                <li
                  key={`list-${list.id}`}
                  className="todos__sidebar-list-name"
                  onClick={() => this.props.handleSwitchList(list.id)}
                >
                  {list.name}
                  <span>{list.tasks.length}</span>
                </li>
              )
            })}
          </ul>
        </div>
        {this.props.todoLists.map((list) => {
          if (list.id === this.props.activeList) {
            return <List key={list.id} title={list.name} todos={list.tasks} onCompletedToggle={this.handleCompletedToggle} onAddButtonClick={() => this.showNewTaskEditor('isTaskEditorVisible')} />;
          }
          return null;
        })}
        {isTaskEditorVisible ? (
          <input className="todos__editor" type="text" onKeyUp={e => this.handleEnterClick(e, 'isTaskEditorVisible')} />
        ): null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoLists: state.todoLists,
  activeList: state.activeList,
  todos: state.todos
});

const mapDispatchToProps  = (dispatch) => ({
  handleSwitchList: (listId) => {
    dispatch(switchList(listId))
  },
  handleAddTask: (listId, task) => {
    dispatch(addTask(listId, task));
  },
  handleCompletedToggle: (activeListId, task) => {
    dispatch(handleCompletedToggle(activeListId, task));
  },
  handleAddList: (listName) => {
    dispatch(addList(listName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

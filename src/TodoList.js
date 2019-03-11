import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem} className="TodoList">
            <input
              placeholder="add list item..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPlus} size="sm" className="faPlus" />
            </button>
          </form>
        </div>
        <div className="deleteButton">
          <button
            type="submit"
            className="DeleteButton"
            onClick={this.props.deleteMarked}>
            <FontAwesomeIcon
              icon={faTrash}
              size="sm"
              className="faWindowClose"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;

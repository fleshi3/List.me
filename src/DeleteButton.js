import React, {Component} from 'react';
import './main.scss';

class DeleteButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" className="DeleteButton" onClick={this.props.deleteMarked}>
          X
        </button>
      </div>
    );
  }
}

export default DeleteButton;

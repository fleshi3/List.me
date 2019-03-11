import React, {Component} from 'react';
import './main.scss';

class DeleteButton extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navLinks">add | filter | about | github</div>
      </div>
    );
  }
}

export default DeleteButton;

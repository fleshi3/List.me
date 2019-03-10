import React, {Component} from 'react';
import './main.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';

const check = (
  <svg className="svg svg-icon" viewBox="0 0 20 20">
    <path
      d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
      style={{stroke: 'white', fill: 'white'}}
    />
  </svg>
);
// Stagger Delay nibba

class TodoItems extends Component {
  createTasks = (item, index) => {
    return (
      <FlipMove  key={item.key}>
        <div
          className="liContainer"
          key={item.key}
          style={{
            background: item.completed ? '#121212' : '',
            order: item.completed ? '99' : '',
          }}>
          <li
                  //key={item.key}
            //onClick={() => this.props.deleteItem(item.key)}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              color: item.completed ? '#353535' : '',
                    order: item.completed ? '99' : ''
            }}>
            <FontAwesomeIcon
              icon={faDotCircle}
              size="xs"
              className="faDotCircle"
              style={{color: item.completed ? '#353535' : ''}}
            />
            <div className="itemText">
                    {item.text}
            </div>
            <div className="pretty p-svg p-curve p-thick p-tada">
              <input
                type="checkbox"
                key={item.key}
                onClick={() => this.props.markComplete(item.key)}
              />
              <div className="state p-warning-o">
                {check}
                <label />
              </div>
            </div>
          </li>
        </div>
      </FlipMove>
    );
  };

  render() {
    const todoEntries = this.props.entries;
    //items are formatted before createTasks are fed
    const listItems = todoEntries.map(this.createTasks);
    return (
      <div>
        <ul className="theList">
          <FlipMove staggerDelayBy={200} className="flexFix" >
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default TodoItems;

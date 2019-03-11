import React, {Component} from 'react';
//import './App.css';
import './main.scss';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import MainHeader from './Header.js';
import MainFooter from './Footer.js';
import DeleteButton from './DeleteButton';
import FlipMove from 'react-flip-move';
import Floater from 'react-floater';
import ReactJoyride, {STATUS} from 'react-joyride';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const defaultOptions = {
  arrowColor: '#fff',
  backgroundColor: '#fff',
  beaconSize: 36,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  primaryColor: '#f04',
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  textColor: '#333',
  width: undefined,
  zIndex: 100,
};

const Overlay = {
  backgroundColor: 'black',
  opacity: '0.8',
  position: 'fixed',
  bottom: '4rem',
  left: '0',
  right: '0',
  top: '0',
  zIndex: '100',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          text: 'Introduce new visitors to my app;',
          key: 'stock1',
          completed: false,
        },
              {
                      text: 'Learn React JS',
                      key: 'stock2',
                      completed: false,
              },
              {
                      text: 'Added interactive tour',
                      key: 'stock3',
                      completed: false,
              }
      ],
      currentItem: {text: '', key: '', completed: ''},
      run: false,
      steps: [
        {
          target: '.todoListMain',
          disableBeacon: true,
          content: (
            <div>
              This is the{' '}
              <span className="textAlt">
                <b>list bar.</b>
              </span>
              This is where list items can be added and deleted.
            </div>
          ),
        },
        {
          target: 'form',
          content: (
            <div>
              List items can be submitted by pressing the
              <div
                style={{
                  display: 'inline-block',
                  background: '#8ec07c',
                  color: '#689d6a',
                  border: '#689d6a 2px solid',
                  borderRadius: '5px',
                  width: '80px',
                }}>
                <FontAwesomeIcon icon={faPlus} />
              </div>{' '}
              button.
            </div>
          ),
        },
        {
          target: '.pretty',
          content:
            'In order to delete entries; the respective checkbox must be clicked.',
        },
        {
          target: '.DeleteButton',
          content: (
            <div>
              Finally, all marked entries can be simultaneously removed by
              clicking the
              <div
                style={{
                  display: 'inline-block',
                  background: '#8ec07c',
                  color: '#689d6a',
                  border: '#689d6a 2px solid',
                  borderRadius: '5px',
                  width: '60px',
                }}>
                <FontAwesomeIcon icon={faTrash} />
              </div>{' '}
              icon.
            </div>
          ),
        },
        {
          target: '.itemContainer',
          content: (
            <div>
              <p class="textAlt">
                <b>Thanks for checking out this App!</b>
              </p>
              <br />
              <span className="textAlt"><b>Note: </b></span> This current build is only responsive for a maximum of 6
              entries.
            </div>
          ),
        },
      ],
      showOverlay: false,
    };
    this.markComplete = this.markComplete.bind(this);
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {text: itemText, key: Date.now(), completed: false};
    this.setState({
      currentItem,
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {text: '', key: '', completed: ''},
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  };

  inputElement = React.createRef();

  markComplete = key => {
    const markedItems = this.state.items.map(items => {
      if (items.key === key) {
        items.completed = !items.completed;
      }
      return items;
    });
    const items = [...this.state.items];
    this.setState({items});
  };

  deleteMarked = items => {
    const filteredItems = this.state.items.filter(item => {
      return item.completed !== true;
    });
    this.setState({
      items: filteredItems,
    });
  };

  takeTour = e => {
    e.preventDefault();
    this.setState({
      run: true,
    });
  };

  render() {
    const {run, steps} = this.state;
    return (
      <div className="App">
        <ReactJoyride
          steps={steps}
          continuous
          run={run}
          styles={{
            options: {
              zIndex: 10000,
              arrowColor: '#e3ffeb',
              backgroundColor: '#e3ffeb',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#8ec07c',
              textColor: '#004a14',
            },
          }}
        />
        <div className="AppContainer">
          <DeleteButton deleteMarked={this.deleteMarked} />
          <MainHeader />
          <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            deleteMarked={this.deleteMarked}
          />
          <FlipMove
            className="itemContainer"
            key={this.state.items.key}
            maintainContainerHeight="true"
            style={{order: this.state.items.completed ? '99' : ''}}>
            <TodoItems
              entries={this.state.items}
              deleteItem={this.deleteItem}
              markComplete={this.markComplete}
            />
            <div className="listFooter">copyright 2019</div>
          </FlipMove>
        </div>
        <MainFooter takeTour={this.takeTour} />
      </div>
    );
  }
}

export default App;

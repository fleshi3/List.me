import React, {Component} from 'react';
//import './App.css';
import './main.scss';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import MainHeader from './Header.js';
import DeleteButton from './DeleteButton';
import FlipMove from 'react-flip-move';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {text: '', key: '', completed: ''},
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

  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <DeleteButton deleteMarked={this.deleteMarked} />
          <MainHeader />
          <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <FlipMove
            className="itemContainer"
            key={this.state.items.key}
            style={{order: this.state.items.completed ? '99' : ''}}>
            <TodoItems
              entries={this.state.items}
              deleteItem={this.deleteItem}
              markComplete={this.markComplete}
            />
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default App;

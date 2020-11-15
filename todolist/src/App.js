import './App.css';
import TodoItem from './components/TodoItem';
import React, {Component} from 'react';
import TickAll from './imgs/tick-all.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // default new item value is empty
      newItem : '',
      todoItems : [
        {title : 'Breakfast', isComplete : true},
        {title :'Go to work'},
        {title :'Drink an coffee'}
      ]
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  // to change state after click on each item 
  onItemClicked(item) {
    const {todoItems} = this.state; // get to do items
    //const isComplete = item.isComplete; // get isComplete state
    // const index = todoItems.indexOf(item); // get index of clicked item and then set state
    // this.setState({
    //   todoItems : [
    //     ...todoItems.slice(0,index), // copy -> no change items they are 0 position to clicked item position
    //     // only change state's clicked item
    //     { 
    //       ...item,
    //       isComplete : !isComplete
    //     },
    //     ...todoItems.slice(index + 1) // copy -> no change items they are after clicked item to last item
    //   ]
    // });
    this.setState({
      todoItems : todoItems.map(i=> i!==item?{...i}:{...i, isComplete : !item.isComplete})
    });
  }
  // to add new item in list
  addNewItem(event) {
    const {todoItems} = this.state; // get to do items
    let inputField = event.target.value; // get input field value
    if (inputField !== '' && event.keyCode === 13) { // push enter key
      this.setState({
        newItem : '', // reset input field value
        todoItems : [
          ...todoItems,
          {title : inputField, isComplete : false} // ad new item with item title is inputField
        ]
      });
    }
  }
  // get new item value when input
  onChange(event) {
    this.setState({
      newItem : event.target.value
    });
  }

  render() {
    const { newItem, todoItems } = this.state;
    if (todoItems.length) {
      return(
        <div className="App">
          <div className="App-handle-item"> 
            <img alt={TickAll} src={TickAll} />
            <input value={newItem} onChange={this.onChange} type="text" placeholder="Add new item..." onKeyUp={this.addNewItem} />
          </div>
          { todoItems.length && todoItems.map((item, index) => 
              <TodoItem
                key = {index} 
                item = {item} 
                onClick={ () => this.onItemClicked(item)} // onclick to call a callback function to return item object
              />
            )
          }
        </div>);
    }
  };
}

export default App;

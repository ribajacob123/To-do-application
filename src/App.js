import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      newItem: "",
      list:[]
    }
  }

  deleteItem(id){
    const list =[...this.state.list];
    const updatedList = list.filter(item=>item.id !==id);

    this.setState({
      list: updatedList
    })
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem= {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }
  updateInput(input){
      this.setState({newItem:input});}
  render(){

    return (
        <div>
          <h3 className="app-title">To Do List</h3>
          <div className="container">
            Add an Item...
            <br/>
            <input type ="text" 
            className="input-text" 
            placeholder = "Write a todo"
            required
            value={this.state.newItem}
            onChange = {e =>this.updateInput(e.target.value)}
            />
          <button 
          className="add-btn"
          onClick = {() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add to do</button>
          <div className ="list">
            <ul>
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                      {item.value}
                      <button
                      className ="btn"
                      onClick={() => this.deleteItem(item.id)}
                      >Done</button>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </div>
      )
  }
}

export default App;


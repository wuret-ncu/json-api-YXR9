import React from 'react';
import { nanoid } from 'nanoid';
import './ToDoList.css';
import Nav from './Nav.js'
import Input from './Input.js'


class ToDoList extends React.Component {

  /////////////To do list/////////////
  constructor(props){
    super(props);
    this.state = {
      // item: [{id: 1, title: "讀書", completed: false}, {id: 2,title: "寫作業", completed: false}, {id: 3, title: "畫畫", completed: false}],
      item: [],
      input: '',
      itemsToShow: "all",
    };
    this.addList = this.addList.bind(this);
  }

  /* 於輸入框輸入清單項目時 */
  insertList = (e) => {
    // console.log(e.target.value);
    if(e.target instanceof HTMLInputElement){
      this.setState({
        input: e.target.value,
      })
    }
  }

  /* 按下Add按鈕，新增清單項目 */
  addList = (e) => {
    if(this.state.input === ""){
      return;
    }
    this.setState({
      item: [...this.state.item,{
        id: nanoid(),
        title: this.state.input,
        completed: false,
      }],
      input: '',
    });
    // console.log('ok~');
  };

  /*按下清單項目的Delete按鈕，刪除清單項目 */
  removeList = (id) => {
    const { item } = this.state;
    item.splice(id, 1);
    this.setState({ item: item });
  }

  /*當勾選清單項目時的事件 */
  toggleCompleted = (id) => {
    const { item } = this.state;
    item[id].completed = !item[id].completed;
    this.setState({ item: item });
  }

  updateListShow = string => {
    this.setState({
      itemsToShow: string
    });
  };

  /*lifecycle*/
  async componentDidMount() {
    const res = await fetch("http://localhost:3001/json");
    const data = await res.json();
    this.setState({item: data});
    console.log("Update")
  }

  render(){
    let item = []

    if (this.state.itemsToShow === "all") {
      item = this.state.item;
    } else if (this.state.itemsToShow === "todo") {
      item = this.state.item.filter(items => !items.completed);
    } else if (this.state.itemsToShow === "done") {
      item = this.state.item.filter(items => items.completed);
    }

    return (
      <div>
        {/* <button className="logout_button" onClick={(e) => handleLogout(e)}>Logout</button> */}
        <h1 className="Listtitle">To Do List</h1>
        <input 
          className="input"
          type="text" 
          placeholder="新增清單項目..."
          value={this.state.input}
          onKeyPress={this.addList} 
          onChange={this.insertList}
        />
        <button className="btn" onClick={this.addList} value={this.state.input}>Add</button>
        <Nav 
          updateListShow={this.updateListShow}
        />
        <Input
          item={item}
          handleOnChange={this.toggleCompleted}
          handleOnRemove={this.removeList}
        />
      </div>
    );
  }
}

export default ToDoList;
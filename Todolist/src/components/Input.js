import React from 'react';
import './Input.css';

function Input(props){
    
    const { item } = props;
    const listItem = item.map((todo,id) => {
        return(
            <div key={todo.id} className = "inputData">
                <div>
                    <label>
                        <input type = "checkbox" onChange = {(e)=>props.handleOnChange(id)}/>
                    </label>
                    <a className = "inputdata">{todo.title}</a>
                    <button className = "btn">Edit</button>
                    <button className = "btn" onClick={()=>props.handleOnRemove(id)}>Delete</button>
                </div>
            </div>
        )
    });
    console.log(listItem);
    return(
        <div className="inputlist">
            <ul>{listItem}</ul>
        </div>
    )
}

export default Input;